let offset = 0; // 시작 오프셋
const limit = 100; // 한번에 가져올 포켓몬 수
const loadedPokemonNames = new Set(); // 이미 로드된 포켓몬 이름을 저장하기 위한 집합
const cardSec = document.querySelector('.cardSec');
let isLoading = false; // 중복 요청 방지
let currentFilter = ''; // 현재 필터된 타입 저장

const typeColors = {
  normal: '#E7E7E7',
  fighting: '#F2B6B6',
  poison: '#E7D0F0',
  ground: '#F2D7AE',
  flying: '#D0E3FF',
  bug: '#E6F2CE',
  rock: '#F2E0BB',
  water: '#D0E3FF',
  steel: '#E2E2F2',
  ghost: '#E0D0E7',
  fire: '#F2C6A2',
  electric: '#F2E3C1',
  grass: '#D6F2C1',
  ice: '#C1F2F2',
  psychic: '#F2C1D3',
  dragon: '#E3D0F2',
  dark: '#D0D0D0',
  fairy: '#F2E1F2'
};

const darkTypeColors = {
  normal: '#A1A1A1',
  fighting: '#B26767',
  poison: '#B39BBF',
  ground: '#BFA17B',
  flying: '#9CB2DF',
  bug: '#B4C39C',
  rock: '#BFAE85',
  water: '#9CB2DF',
  steel: '#A0A0B0',
  ghost: '#A396B0',
  fire: '#BF8A71',
  electric: '#BFA982',
  grass: '#A5BFA0',
  ice: '#84C0C0',
  psychic: '#BF8A97',
  dragon: '#B8A0BF',
  dark: '#909090',
  fairy: '#BF9FBF'
};

async function fetchPokemons(offset, limit, filterType = '') {
  if (filterType) {
    const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${filterType}`);
    const typeData = await typeResponse.json();
    const sortedPokemon = typeData.pokemon
      .map(p => p.pokemon)
      .sort((a, b) => {
        const aId = parseInt(a.url.split('/').slice(-2, -1)[0]);
        const bId = parseInt(b.url.split('/').slice(-2, -1)[0]);
        return aId - bId;
      });
    return sortedPokemon.slice(offset, offset + limit);
  } else {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }
}

async function fetchPokemonDetails(pokemon) {
  const response = await fetch(pokemon.url);
  const data = await response.json();
  return data;
}

async function fetchPokemonSpecies(pokemon) {
  const response = await fetch(pokemon.species.url);
  const data = await response.json();
  return data.names.find(name => name.language.name === 'ko').name;
}

async function fetchPokemonSprite(pokemon) {
  const response = await fetch(pokemon.url);
  const data = await response.json();
  return data.sprites.front_default; // 기본 이미지 경로
}

async function loadPokemons() {
  if (isLoading) return; // 이미 로드 중이면 중복 요청 방지
  isLoading = true; // 로딩 시작
  const pokemons = await fetchPokemons(offset, limit, currentFilter);
  for (let pokemon of pokemons) {
    if (!loadedPokemonNames.has(pokemon.name)) { // 중복 확인
      try {
        const details = await fetchPokemonDetails(pokemon);
        const koreanName = await fetchPokemonSpecies(details);
        let spriteUrl = details.sprites.versions['generation-v']['black-white'].animated.front_default;

        if (!spriteUrl) {
          spriteUrl = details.sprites.front_default; // 기본 이미지
          if (!spriteUrl) {
            spriteUrl = await fetchPokemonSprite(pokemon); // 기본 이미지가 없을 때
          }
        }

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
}

// 필터링 기능
function filterByType(type) {
  offset = 0; // 오프셋 초기화
  loadedPokemonNames.clear(); // 로드된 포켓몬 이름 초기화
  cardSec.innerHTML = ''; // 기존 카드 초기화
  currentFilter = type; // 현재 필터 저장
  loadPokemons(); // 새로운 데이터 로드
}

// 다크 모드 토글 기능
function setCardBackgroundColor(card) {
  const type = currentFilter || card.dataset.types.split(' ')[0];
  if (document.body.classList.contains('darkBtn')) {
    card.style.backgroundColor = darkTypeColors[type];
  } else {
    card.style.backgroundColor = typeColors[type];
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('darkBtn');
  document.getElementById('lightDarkToggle').classList.toggle('darkBtn');
  document.querySelectorAll('.cardOne').forEach(card => {
    setCardBackgroundColor(card);
  });
}

// 무한 스크롤 기능
window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
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

// 초기 로드
loadPokemons();