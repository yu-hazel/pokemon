<template>
  <div class="mainSec" @scroll="handleScroll">
    <div>
      <h2>우리만의 <span id="highlightWord"></span> 포켓몬 도감</h2>
      <div class="searchBar">
        <input
          type="text"
          placeholder="포켓몬을 검색해보세요!"
          id="search"
          v-model="searchQuery"
        />
        <span class="tooltip">검색 가능한 언어: 한글, 영어, 일본어</span>
        <button id="searchBt" @click="handleSearch">검색</button>
      </div>
    </div>
    <div>
      <div class="type">
        <p class="typeTitle">속성으로 찾아보기</p>
        <div class="typeGroup">
          <p
            v-for="(translation, type) in typeTranslations"
            :key="type"
            :class="type"
            @click="filterByType(type)"
          >
            {{ translation }}
          </p>
        </div>
      </div>
      <div class="sort">번호순 (오름차순)</div>
      <div id="searchResultCount">{{ searchResultCount }}</div>
      <div class="cardSec">
        <div
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          class="cardOne"
          :style="setCardBackgroundColor(pokemon)"
        >
          <span>no.{{ pokemon.id }}</span>
          <img :src="pokemon.sprite" :alt="pokemon.names.korean" />
          <span>{{ pokemon.names.korean }}</span>
          <span>{{ pokemon.names.english }}</span>
          <span>{{ pokemon.names.japanese }}</span>
          <div class="typeWrap">
            <p v-for="type in pokemon.types" :key="type" :class="type">
              {{ typeTranslations[type] }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="loadingScreen" class="loading-screen">Loading...</div>
      <div v-if="endOfListMessage" class="endOfListMessage">
        모든 포켓몬을 소환했습니다
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { typeColors, darkTypeColors } from "@/utils/back_color.js";

// 상태 변수
const searchQuery = ref("");
const searchResultCount = ref("");
const pokemons = ref([]);
let offset = 0;
const limit = 16;
const loadedPokemonNames = new Set();
const isLoading = ref(false);
const currentFilter = ref("");
const morePokemonsAvailable = ref(true);

// 타입 번역
const typeTranslations = {
  normal: "노말",
  fire: "불꽃",
  water: "물",
  electric: "전기",
  grass: "풀",
  ice: "얼음",
  fighting: "격투",
  poison: "독",
  ground: "땅",
  flying: "비행",
  psychic: "에스퍼",
  bug: "벌레",
  rock: "바위",
  ghost: "고스트",
  dragon: "드래곤",
  dark: "악",
  steel: "강철",
  fairy: "페어리",
};

// 포켓몬 데이터 가져오기
async function fetchPokemons(offset, limit, filterType = "") {
  if (filterType) {
    const typeResponse = await fetch(
      `https://pokeapi.co/api/v2/type/${filterType}`
    );
    const typeData = await typeResponse.json();
    const mappedData = typeData.pokemon.map((p) => p.pokemon);
    return mappedData.slice(offset, offset + limit);
  } else {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }
}

// 포켓몬 상세 정보 가져오기
async function fetchPokemonDetails(pokemon) {
  const response = await fetch(pokemon.url);
  const data = await response.json();
  return data;
}

// 포켓몬 이름 가져오기 (한글, 영어, 일본어)
async function fetchPokemonSpecies(pokemon) {
  const response = await fetch(pokemon.species.url);
  const data = await response.json();
  return {
    korean: data.names.find((name) => name.language.name === "ko").name,
    english: data.names.find((name) => name.language.name === "en").name,
    japanese: data.names.find((name) => name.language.name === "ja").name,
  };
}

// 포켓몬 데이터 로드하고 화면에 표시
async function loadPokemons() {
  if (isLoading.value || !morePokemonsAvailable.value) return;
  isLoading.value = true;
  const fetchedPokemons = await fetchPokemons(
    offset,
    limit,
    currentFilter.value
  );

  if (fetchedPokemons.length === 0) {
    morePokemonsAvailable.value = false;
    showEndOfListMessage();
    isLoading.value = false;
    return;
  }

  for (let pokemon of fetchedPokemons) {
    if (!loadedPokemonNames.has(pokemon.name)) {
      try {
        const details = await fetchPokemonDetails(pokemon);
        const names = await fetchPokemonSpecies(details);

        let spriteUrl = details.sprites.front_default;
        if (!spriteUrl) {
          spriteUrl = details.sprites.other["official-artwork"].front_default;
        }
        if (!spriteUrl) {
          spriteUrl = "@/assets/img/silhouette.png";
        }

        pokemons.value.push({
          id: details.id,
          name: pokemon.name,
          names,
          sprite: spriteUrl,
          types: details.types.map((typeInfo) => typeInfo.type.name),
        });

        loadedPokemonNames.add(pokemon.name);
      } catch (error) {
        console.error(`Error fetching data for ${pokemon.name}:`, error);
      }
    }
  }

  offset += limit;
  isLoading.value = false;
}

// 검색 기능
function handleSearch() {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) return;

  const matchedPokemons = pokemons.value.filter(
    (pokemon) =>
      pokemon.names.korean.toLowerCase().includes(query) ||
      pokemon.names.english.toLowerCase().includes(query) ||
      pokemon.names.japanese.toLowerCase().includes(query)
  );

  searchResultCount.value = `총 ${matchedPokemons.length}마리의 포켓몬이 소환되었습니다.`;
  pokemons.value = matchedPokemons;
}

// 필터링 기능
function filterByType(type) {
  offset = 0;
  loadedPokemonNames.clear();
  pokemons.value = [];
  currentFilter.value = type;
  removeEndOfListMessage();
  clearSearchResultCount();
  morePokemonsAvailable.value = true;
  loadPokemons();
}

// 카드의 배경색 다크 모드 설정
function setCardBackgroundColor(pokemon) {
  const type = currentFilter.value || pokemon.types[0];
  if (document.body.classList.contains("darkBtn")) {
    return { backgroundColor: darkTypeColors[type] };
  } else {
    return { backgroundColor: typeColors[type] };
  }
}

// 다크 모드 토글
function toggleDarkMode() {
  document.body.classList.toggle("darkBtn");
  document.getElementById("lightDarkToggle").classList.toggle("darkBtn");
  pokemons.value.forEach((pokemon) => {
    setCardBackgroundColor(pokemon);
  });
}

// 하단에 문구를 표시하는 함수
function showEndOfListMessage() {
  removeEndOfListMessage();

  const endOfListMessage = document.createElement("div");
  endOfListMessage.className = "endOfListMessage";
  endOfListMessage.textContent = "모든 포켓몬을 소환했습니다";
  document.body.appendChild(endOfListMessage);
}

// 하단 문구를 제거하는 함수
function removeEndOfListMessage() {
  const existingMessage = document.querySelector(".endOfListMessage");
  if (existingMessage) {
    existingMessage.remove();
  }
}

// 검색 결과 건수를 지우는 함수
function clearSearchResultCount() {
  searchResultCount.value = "";
}

// 무한 스크롤 처리 함수
function handleScroll() {
  const bottomOfWindow =
    window.innerHeight + window.scrollY >=
    document.documentElement.offsetHeight - 200;
  if (bottomOfWindow && !isLoading.value && morePokemonsAvailable.value) {
    loadPokemons();
  }
}

// 초기 포켓몬 데이터 로드
onMounted(() => {
  loadPokemons();
  window.addEventListener("scroll", handleScroll);
});
</script>
