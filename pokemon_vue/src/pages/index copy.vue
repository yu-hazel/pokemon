<template>
  <div class="mainSec">
    <div>
      <h2>우리만의 <span id="highlightWord"></span> 포켓몬 도감</h2>
      <div class="searchBar">
        <input type="text" placeholder="포켓몬을 검색해보세요!" id="search" />
        <span class="tooltip">검색 가능한 언어: 한글, 영어, 일본어</span>
        <button id="searchBt" @click="handleSearch">검색</button>
      </div>
    </div>
    <div>
      <div class="type">
        <p class="typeTitle">속성으로 찾아보기</p>
        <div class="typeGroup">
          <p class="normal">노말</p>
          <p class="fighting">격투</p>
          <p class="poison">독</p>
          <p class="ground">땅</p>
          <p class="flying">비행</p>
          <p class="bug">벌레</p>
          <p class="rock">바위</p>
          <p class="water">물</p>
          <p class="steel">강철</p>
          <p class="ghost">고스트</p>
          <p class="fire">불꽃</p>
          <p class="electric">전기</p>
          <p class="grass">풀</p>
          <p class="ice">얼음</p>
          <p class="psychic">에스퍼</p>
          <p class="dragon">드래곤</p>
          <p class="dark">악</p>
          <p class="fairy">페어리</p>
        </div>
      </div>
      <div class="sort">번호순 (오름차순)</div>
      <div id="searchResultCount"></div>
      <div class="cardSec">
        <div v-for="pokemon in pokemons" :key="pokemon.name" class="cardOne">
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
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

// 상태 변수
const searchQuery = ref("");
const pokemons = ref([]);

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
async function fetchPokemons() {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=16`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
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

// 초기 포켓몬 데이터 로드
async function loadPokemons() {
  const fetchedPokemons = await fetchPokemons();

  for (let pokemon of fetchedPokemons) {
    const details = await fetchPokemonDetails(pokemon);
    const names = await fetchPokemonSpecies(details);

    let spriteUrl = details.sprites.front_default;
    if (!spriteUrl) {
      spriteUrl = details.sprites.other["official-artwork"].front_default;
    }
    if (!spriteUrl) {
      spriteUrl = "/pokemon/img/silhouette.png";
    }

    pokemons.value.push({
      id: details.id,
      name: pokemon.name,
      names,
      sprite: spriteUrl,
      types: details.types.map((typeInfo) => typeInfo.type.name),
    });
  }
}

// 검색 기능 (간단한 예제)
function handleSearch() {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) return;

  // 검색된 포켓몬만 필터링 (여기서는 단순히 이름으로 필터링합니다)
  pokemons.value = pokemons.value.filter(
    (pokemon) =>
      pokemon.names.korean.toLowerCase().includes(query) ||
      pokemon.names.english.toLowerCase().includes(query) ||
      pokemon.names.japanese.toLowerCase().includes(query)
  );
}

// 컴포넌트가 마운트될 때 초기 포켓몬 데이터 로드
onMounted(() => {
  loadPokemons();
});
</script>
