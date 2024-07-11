import { typeColors, darkTypeColors } from '/pokemon/js/back_color.js';

let offset = 0; // 시작 오프셋
const limit = 20; // 한번에 가져올 포켓몬 수
const loadedPokemonNames = new Set(); // 이미 로드된 포켓몬 이름을 저장하기 위한 집합
const cardSec = document.querySelector('.cardSec');
let isLoading = false; // 중복 요청 방지
let currentFilter = ''; // 현재 필터된 타입 저장

// 로딩 화면 요소 선택
const loadingScreen = document.getElementById('loadingScreen');

// 포켓몬 데이터 가져오기
async function fetchPokemons(offset, limit, filterType = '') {
  if (filterType) {
    const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${filterType}`);
    const typeData = await typeResponse.json();
    // console.log('전처리 전:', typeData.pokemon); // 전처리 전 데이터 출력
    const mappedData = typeData.pokemon.map(p => p.pokemon);
    // console.log('전처리 후:', mappedData); // 콘솔에 변환된 데이터 출력
    return mappedData.slice(offset, offset + limit); // 오프셋 적용하여 데이터 나누어 가져오기
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

// 포켓몬 한글 이름 가져오기
async function fetchPokemonSpecies(pokemon) {
  const response = await fetch(pokemon.species.url);
  const data = await response.json();
  return data.names.find(name => name.language.name === 'ko').name;
}

// 포켓몬 데이터 로드하고 화면에 표시
async function loadPokemons() {
  if (isLoading) return; // 이미 로드 중이면 중복 요청 방지
  isLoading = true; // 로딩 시작
  loadingScreen.style.display = 'flex'; // 로딩 화면 표시
  document.body.style.overflow = 'hidden'; // 스크롤 막기
  const pokemons = await fetchPokemons(offset, limit, currentFilter);
  // console.log(`pokemons: ${JSON.stringify(pokemons)}`); // 객체를 JSON 문자열로 변환하여 출력

  for (let pokemon of pokemons) {
    // console.log(`pokemon: ${JSON.stringify(pokemon)}`); // 객체를 JSON 문자열로 변환하여 출력
    if (!loadedPokemonNames.has(pokemon.name)) { // 중복 확인
      try {
        const details = await fetchPokemonDetails(pokemon);
        const koreanName = await fetchPokemonSpecies(details);
        const spriteUrl = details.sprites.front_default; // 기본 이미지 경로

        const card = document.createElement('div');
        card.className = 'cardOne';
        card.dataset.types = details.types.map(typeInfo => typeInfo.type.name).join(' ');

        const cardHTML = `
          <span>no.${details.id}</span>
          <img src="${spriteUrl}" alt="${koreanName}">
          <span>${koreanName}</span>
          <div class="typeWrap">
            ${details.types.map(typeInfo => `<p class="${typeInfo.type.name}">${typeTranslations[typeInfo.type.name]}</p>`).join('')}
          </div>
        `;

        card.innerHTML = cardHTML;

        // 타입에 맞는 배경색 설정
        setCardBackgroundColor(card);

        cardSec.appendChild(card);

        // 로드된 포켓몬 이름을 집합에 추가
        loadedPokemonNames.add(pokemon.name);

      } catch (error) {
        console.error(`Error fetching data for ${pokemon.name}:`, error);
      }
    }
  }
  offset += limit; // 다음 오프셋 설정
  isLoading = false; // 로딩 종료
  loadingScreen.style.display = 'none'; // 로딩 화면 숨기기
  document.body.style.overflow = 'auto'; // 스크롤 다시 활성화
}

// 필터링 기능
function filterByType(type) {
  offset = 0; // 오프셋 초기화
  loadedPokemonNames.clear(); // 로드된 포켓몬 이름 초기화
  cardSec.innerHTML = ''; // 기존 카드 초기화
  currentFilter = type; // 현재 필터 저장
  loadPokemons(); // 새로운 데이터 로드
}

// 카드의 배경색 다크 모드
function setCardBackgroundColor(card) {
  const type = currentFilter || card.dataset.types.split(' ')[0];
  if (document.body.classList.contains('darkBtn')) {
    card.style.backgroundColor = darkTypeColors[type];
  } else {
    card.style.backgroundColor = typeColors[type];
  }
}
// 다크 모드 토글
function toggleDarkMode() {
  document.body.classList.toggle('darkBtn');
  document.getElementById('lightDarkToggle').classList.toggle('darkBtn');
  document.querySelectorAll('.cardOne').forEach(card => {
    setCardBackgroundColor(card);
  });
}

// 무한 스크롤 기능
window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
    // 스크롤이 거의 끝에 도달했을 때 추가 포켓몬 로드
    loadPokemons();
  }
});

// 포켓몬 타입 한글변환
const typeTranslations = {
  normal: '노말',
  fire: '불꽃',
  water: '물',
  electric: '전기',
  grass: '풀',
  ice: '얼음',
  fighting: '격투',
  poison: '독',
  ground: '땅',
  flying: '비행',
  psychic: '에스퍼',
  bug: '벌레',
  rock: '바위',
  ghost: '고스트',
  dragon: '드래곤',
  dark: '악',
  steel: '강철',
  fairy: '페어리'
};

// 타입 클릭 이벤트 추가
document.querySelectorAll('.typeGroup p').forEach(element => {
  element.addEventListener('click', (event) => {
    const type = event.target.className;
    filterByType(type);
  });
});

// 다크 모드 토글 버튼 이벤트 추가
document.getElementById('lightDarkToggle').addEventListener('click', toggleDarkMode);



// // JSON 파일 가져오기
// async function loadPokemonNames() {
//   try {
//     const response = await fetch('/pokemon/html/poke_name_lang.json');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const pokemonNames = await response.json();
//     // console.log('Pokemon names loaded:', pokemonNames); // 로드된 JSON 데이터 확인
//     return pokemonNames;
//   } catch (error) {
//     console.error('Failed to load pokemon names:', error);
//     return [];
//   }
// };

// // 검색어와 일치하는 포켓몬의 영어 이름을 콘솔에 출력하는 함수
// function searchByKeyword(keyword, pokemonNames) {
//   const matchedPokemon = pokemonNames.find(p => p.names.korean === keyword);
//   if (matchedPokemon) {
//     console.log('Matched Pokemon English name:', matchedPokemon.names.english);
//   } else {
//     console.log('포켓몬을 찾을 수 없습니다.');
//   }
// }

// // 검색 input 이벤트 추가
// document.getElementById('search').addEventListener('keydown', async (event) => {
//   if (event.key === 'Enter') {
//     const searchValue = event.target.value.trim();
//     if (searchValue) {
//       const pokemonNames = await loadPokemonNames();
//       searchByKeyword(searchValue, pokemonNames);
//     }
//   }
// });

let allPokemonNames = [];

async function loadPokemonNames() {
  try {
    const response = await fetch('/pokemon/html/poke_name_lang.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const pokemonNames = await response.json();
    console.log('Pokemon names loaded:', pokemonNames); // 로드된 JSON 데이터 확인
    allPokemonNames = pokemonNames; // 전역 변수에 저장
  } catch (error) {
    console.error('Failed to load pokemon names:', error);
  }
}

async function handleSearch() {
  const query = document.getElementById('search').value.trim().toLowerCase();
  if (!query) {
    cardSec.innerHTML = ''; // 검색어가 없으면 화면을 비움
    loadPokemons(); // 원래 로드 함수 호출
    return;
  }

  const matchedPokemons = allPokemonNames.filter(p => p.names.korean.toLowerCase().includes(query));

  cardSec.innerHTML = ''; // 기존 카드를 초기화
  for (let pokemon of matchedPokemons) {
    try {
      const details = await fetchPokemonDetails({ url: `https://pokeapi.co/api/v2/pokemon/${pokemon.names.english.toLowerCase()}` });
      const spriteUrl = details.sprites.front_default; // 기본 이미지 경로

      const card = document.createElement('div');
      card.className = 'cardOne';
      card.dataset.types = details.types.map(typeInfo => typeInfo.type.name).join(' ');
      card.dataset.englishName = details.name; // 영어 이름 데이터 속성에 저장
      card.dataset.koreanName = pokemon.names.korean; // 한글 이름 데이터 속성에 저장

      const cardHTML = `
        <span>no.${details.id}</span>
        <img src="${spriteUrl}" alt="${pokemon.names.korean}">
        <span>${pokemon.names.korean}</span>
        <div class="typeWrap">
          ${details.types.map(typeInfo => `<p class="${typeInfo.type.name}">${typeTranslations[typeInfo.type.name]}</p>`).join('')}
        </div>
      `;

      card.innerHTML = cardHTML;

      // 타입에 맞는 배경색 설정
      setCardBackgroundColor(card);

      cardSec.appendChild(card);

    } catch (error) {
      console.error(`Error fetching data for ${pokemon.names.korean}:`, error);
    }
  }
}

document.getElementById('searchBt').addEventListener('click', handleSearch);
document.getElementById('search').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});

async function init() {
  await loadPokemonNames(); // 포켓몬 이름 데이터를 먼저 로드
  loadPokemons(); // 일반 포켓몬 데이터 로드
}

init();

// 초기 로드
// loadPokemons();