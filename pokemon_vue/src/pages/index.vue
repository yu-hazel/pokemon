<template>
  <div>
    <div v-if="loadingScreen" class="loading-screen">
      <iframe
        src="https://lottie.host/embed/d9047134-fec7-4dec-bba1-a5daccfa345f/Nxtp4KlqIX.json"
      ></iframe>
    </div>
    <div class="mainSec" @scroll="handleScroll">
      <div>
        <highlightWord />
        <div class="searchBar">
          <input
            type="text"
            placeholder="포켓몬을 검색해보세요!"
            id="search"
            v-model="searchQuery"
            @keyup.enter="handleSearch"
            @input="detectLanguage"
          />
          <span
            class="tooltip"
            :style="{ display: showTooltip ? 'block' : 'none' }"
            >검색 가능한 언어: 한국어, 영어, 일본어</span
          >
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
          <div v-for="pokemon in pokemons" :key="pokemon.id">
            <router-link :to="`/${pokemon.id}`">
              <div class="cardOne" :style="setCardBackgroundColor(pokemon)">
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
            </router-link>
          </div>
        </div>
        <div v-if="endOfListMessage" class="endOfListMessage">
          모든 포켓몬을 소환했습니다
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { typeColors, darkTypeColors } from "@/utils/back_color.js";
import highlightWord from "@/components/main_highlight_word.vue";

// 상태 변수
const searchQuery = ref(""); // 검색어
const searchResultCount = ref(""); // 검색 결과 개수
const pokemons = ref([]); // 로드된 포켓몬 목록
let offset = 0; // 데이터 오프셋
const limit = 16; // 한 번에 가져올 포켓몬 수
const loadedPokemonNames = new Set(); // 이미 로드된 포켓몬 이름
const isLoading = ref(false); // 로딩 상태
const currentFilter = ref(""); // 현재 필터
const morePokemonsAvailable = ref(true); // 더 많은 포켓몬이 있는지 확인
const loadingScreen = ref(false); // 로딩 화면 상태
const endOfListMessage = ref(false); // 목록 끝 메시지 상태
const showTooltip = ref(false); // 툴팁 표시 상태
const isSearchMode = ref(false); // 검색 모드 상태
let allPokemonNames = ref([]); // 모든 포켓몬 이름 데이터

// 포켓몬 ID로 상세 정보 API 호출
async function fetchPokemonDetailsById(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return {
    id: data.id,
    sprite:
      data.sprites.front_default ||
      data.sprites.other["official-artwork"].front_default ||
      "@/assets/img/silhouette.png",
    types: data.types.map((typeInfo) => typeInfo.type.name),
    height: data.height,
    weight: data.weight,
  };
}

// watch로 isLoading 상태 변화를 감지하여 스크롤 막기/활성화 처리
watch(isLoading, (newValue) => {
  const htmlElement = document.documentElement; // <html> 태그 선택
  if (newValue) {
    htmlElement.style.overflowY = "hidden"; // 스크롤 막기
  } else {
    htmlElement.style.overflowY = "auto"; // 스크롤 다시 활성화
  }
});

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
  if (isLoading.value || !morePokemonsAvailable.value) return; // 이미 로드 중이거나 더 이상 로드할 포켓몬이 없으면 중복 요청 방지
  isLoading.value = true; // 로딩 시작
  loadingScreen.value = true; // 로딩 화면 표시
  document.body.style.overflow = "hidden"; // 스크롤 막기
  const pokemonsData = await fetchPokemons(offset, limit, currentFilter.value);

  if (pokemonsData.length === 0) {
    morePokemonsAvailable.value = false;
    showEndOfListMessage();
    isLoading.value = false;
    loadingScreen.value = false; // 로딩 화면 숨기기
    document.body.style.overflow = "auto"; // 스크롤 다시 활성화
    return;
  }

  for (let pokemon of pokemonsData) {
    if (!loadedPokemonNames.has(pokemon.name)) {
      // 중복 확인
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
  loadingScreen.value = false; // 로딩 화면 숨기기
  document.body.style.overflow = "auto"; // 스크롤 다시 활성화
}

// 검색 기능
async function handleSearch() {
  isSearchMode.value = true; // 검색 모드 활성화
  const query = searchQuery.value.trim().toLowerCase();
  currentFilter.value = ""; // 검색 시 필터 초기화
  if (!query) {
    showTooltip.value = false; // 검색창이 비어있을 때 툴팁 숨김
    return;
  }

  const matchedPokemons = allPokemonNames.value.filter((pokemon) => {
    return (
      pokemon.names.korean.includes(query) ||
      pokemon.names.english.toLowerCase().includes(query) ||
      pokemon.names.japanese.includes(query)
    );
  });

  if (matchedPokemons.length === 0) {
    searchResultCount.value = "일치하는 포켓몬이 없습니다.";
    pokemons.value = [];
    return;
  }

  // 포켓몬 상세 정보 API 호출
  const promises = matchedPokemons.map(async (pokemon) => {
    const details = await fetchPokemonDetailsById(pokemon.id);
    return {
      ...details,
      names: pokemon.names,
      descriptions: pokemon.descriptions,
    };
  });

  // 포켓몬 데이터 업데이트
  pokemons.value = await Promise.all(promises);
  searchResultCount.value = `총 ${matchedPokemons.length}마리의 포켓몬이 소환되었습니다.`;
}

// 필터링 기능
function filterByType(type) {
  isSearchMode.value = false; // 검색 모드 비활성화
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
  endOfListMessage.value = true;
}

// 하단 문구를 제거하는 함수
function removeEndOfListMessage() {
  endOfListMessage.value = false;
}

// 검색 결과 건수를 지우는 함수
function clearSearchResultCount() {
  searchResultCount.value = "";
}

// 무한 스크롤 처리 함수
function handleScroll() {
  if (isSearchMode.value) return; // 검색 모드일 때는 스크롤 로딩 중지
  const bottomOfWindow =
    window.innerHeight + window.scrollY >=
    document.documentElement.offsetHeight - 200;
  if (bottomOfWindow && !isLoading.value && morePokemonsAvailable.value) {
    loadPokemons();
  }
}
//json 불러오기
async function loadPokemonNames() {
  const response = await fetch("/src/assets/poke_details_data.json");
  const pokemonNames = await response.json();
  allPokemonNames.value = pokemonNames;
  // console.log("Loaded Pokemon Names:", allPokemonNames.value); // 콘솔에 로드된 데이터 출력
}

// 정규식 사용해서 언어 구분 및 콘솔 출력
function detectLanguage() {
  const query = searchQuery.value.trim();
  if (!query) {
    showTooltip.value = false;
    return;
  }
  const language = getLanguageType(query);
  console.log(`Detected language: ${language}`);
  // 언어가 unknown이거나 query가 숫자일 경우 showTooltip을 true로 설정
  showTooltip.value = language === "unknown" || language === "number";
}

// 정규식 사용해서 언어 구분
function getLanguageType(text) {
  const koreanPattern = /[\u3131-\uD79D]/giu;
  const japanesePattern = /[\u3040-\u30ff\u31f0-\u31ff\ufb00-\uff9f]/giu;
  const englishPattern = /^[A-Za-z]+$/;
  const numberPattern = /\d/;

  if (numberPattern.test(text)) {
    return "number";
  } else if (koreanPattern.test(text)) {
    return "korean";
  } else if (japanesePattern.test(text)) {
    return "japanese";
  } else if (englishPattern.test(text)) {
    return "english";
  } else {
    return "unknown";
  }
}

// 초기 포켓몬 데이터 로드
onMounted(() => {
  loadPokemonNames(); // JSON 데이터 로드
  loadPokemons();
  window.addEventListener("scroll", handleScroll);
});
</script>
