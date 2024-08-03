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
              :class="['nes-btn', type]"
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
            <div
              class="cardOne nes-container is-rounded"
              @click="openViewModal(pokemon.id)"
            >
              <!-- <div class="cardOne nes-container is-rounded"> -->
              <span>no.{{ pokemon.id }}</span>
              <img :src="pokemon.sprite" :alt="pokemon.names.korean" />
              <span>{{ pokemon.names.korean }}</span>
              <div class="langEnJp">
                <span>{{ pokemon.names.english }}</span>
                <span>{{ pokemon.names.japanese }}</span>
              </div>
              <div class="typeWrap">
                <p
                  v-for="type in pokemon.types"
                  :key="type"
                  :class="['nes-btn', type]"
                >
                  {{ typeTranslations[type] }}
                </p>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
        <div v-if="endOfListMessage" class="endOfListMessage">
          모든 포켓몬을 소환했습니다
        </div>
      </div>
    </div>
    <!-- 모달 -->
    <v-dialog v-model="isModalOpen" max-width="600px">
      <pokemon-detail-modal :id="selectedPokemonId" @close="closeViewModal" />
    </v-dialog>
  </div>
</template>
<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { usePokemonStore } from "@/stores/pokemonStore";
import { typeColors, darkTypeColors } from "@/utils/back_color.js";
import highlightWord from "@/components/main_highlight_word.vue";
import pokeDetails from "@/data/poke_details_data.json";

//모달
const isModalOpen = ref(false);
const selectedPokemonId = ref(null);

//모달 컴포넌트 임포트
import PokemonDetailModal from "@/components/PokemonDetailModal.vue";

//모달 열기
const openViewModal = (id) => {
  selectedPokemonId.value = id;
  isModalOpen.value = true;
};
// 모달 닫기 함수
const closeViewModal = () => {
  isModalOpen.value = false;
};

// 상태 변수
const searchQuery = ref(""); // 검색어
const searchResultCount = ref(""); // 검색 결과 개수
const pokemons = ref([]); // 로드된 포켓몬 목록
let offset = 0; // 데이터 오프셋
const limit = 16; // 한 번에 가져올 포켓몬 수
const loadedPokemonNames = new Set(); // 이미 로드된 포켓몬 이름
const isLoading = ref(false); // 로딩 상태

const currentFilter = ref(""); // 현재 필터
const cardBackgroundColor = ref(""); // 배경색을 저장하는 변수

const morePokemonsAvailable = ref(true); // 더 많은 포켓몬이 있는지 확인
const loadingScreen = ref(false); // 로딩 화면 상태
const endOfListMessage = ref(false); // 목록 끝 메시지 상태
const showTooltip = ref(false); // 툴팁 표시 상태
const isSearchMode = ref(false); // 검색 모드 상태
let allPokemonNames = ref([]); // 모든 포켓몬 이름 데이터

//스크롤 위치 저장
// onBeforeUnmount(() => {
//   console.log(`Saving scroll position: ${window.scrollY}`);
//   localStorage.setItem("scrollY", window.scrollY);
// });

// // 스크롤 위치 저장 함수
// function saveScrollPosition() {
//   const scrollY = window.scrollY;
//   localStorage.setItem("scrollY", scrollY.toString());
//   console.log(`Saving scroll position: ${scrollY}`);
// }

// // 라우터 변경 전 스크롤 위치 저장
// onBeforeUnmount(() => {
//   saveScrollPosition();
// });

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

//스크롤 막기
// watch로 isLoading 상태 변화를 감지하여 스크롤 막기/활성화 처리
watch(isLoading, (newValue) => {
  const htmlElement = document.documentElement; // <html> 태그 선택
  if (newValue) {
    htmlElement.style.overflowY = "hidden"; // 스크롤 막기
  } else {
    htmlElement.style.overflowY = "auto"; // 스크롤 다시 활성화
  }
});

//스크롤 막기 body 태그의 높이와 overflow를 이용해서 스크롤 완전히 차단
// watch(isLoading, (newValue) => {
//   const bodyElement = document.body; // <body> 태그 선택
//   if (newValue) {
//     bodyElement.style.height = "100vh"; // 높이를 100vh로 설정
//     bodyElement.style.overflow = "hidden"; // 스크롤 막기
//   } else {
//     bodyElement.style.height = ""; // 높이를 원래대로 설정
//     bodyElement.style.overflow = ""; // 스크롤 다시 활성화
//   }
// });

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
  loadingScreen.value = true; // 로딩 화면 표시
  isLoading.value = true; // 로딩 시작
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

        // 다크모드가 활성화된 경우 is-dark 클래스를 추가
        if (document.body.classList.contains("darkMode")) {
          nextTick(() => {
            document.querySelectorAll(".cardOne").forEach((card) => {
              card.classList.add("is-dark");
            });
          });
        }
      } catch (error) {
        console.error(`Error fetching data for ${pokemon.name}:`, error);
      }
    }
  }
  // store.addPokemons(pokemons.value);

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
async function filterByType(type) {
  isSearchMode.value = false; // 검색 모드 비활성화
  searchQuery.value = ""; //검색창 비우기
  offset = 0;
  loadedPokemonNames.clear();
  pokemons.value = [];
  currentFilter.value = type;
  // console.log("currentFilter:", currentFilter.value); //콘솔에 currentFilter 출력
  removeEndOfListMessage();
  clearSearchResultCount();
  morePokemonsAvailable.value = true;
  await loadPokemons();
  // setCardBackgroundColor(); // 필터가 적용된 후 배경색 설정
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
  allPokemonNames.value = pokeDetails;
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
  // console.log(`Detected language: ${language}`);
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
// 초기 포켓몬 데이터 로드
onMounted(() => {
  loadPokemonNames(); // JSON 데이터 로드
  loadPokemons();
  window.addEventListener("scroll", handleScroll);
});
</script>
