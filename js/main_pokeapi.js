let offset = 0; // 시작 오프셋
const limit = 40; // 한번에 가져올 포켓몬 수
const inner = document.getElementById('inner');
const loadedPokemonNames = new Set(); // 이미 로드된 포켓몬 이름을 저장하기 위한 집합
const cardSec = document.querySelector('.cardSec');
let isLoading = false; // 중복 요청 방지

async function fetchPokemons(offset, limit) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  const data = await response.json();
  // cardSec.innerHTML = '';
  return data.results;
}
//데이터에서 results

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

async function loadPokemons() {
  if (isLoading) return; // 이미 로드 중이면 중복 요청 방지
  isLoading = true; // 로딩 시작
  const pokemons = await fetchPokemons(offset, limit);
  for (let pokemon of pokemons) {
    if (!loadedPokemonNames.has(pokemon.name)) { // 중복 확인
      try {
        const details = await fetchPokemonDetails(pokemon);
        const koreanName = await fetchPokemonSpecies(details);
        const spriteUrl = details.sprites.versions['generation-v']['black-white'].animated.front_default;
        [];
        cardSec.innerHTML += `
        <div class="cardOne">
           <span>no.${details.id}</span>
           <img src="${spriteUrl}" alt>
            <span>${koreanName}</span>
            <div class="typeWrap">
              ${details.types.map(typeInfo => `<p>${typeInfo.type.name}</p>`).join('')}
            </div>
         </div>
        `;
      } catch (error) {
        console.error(`Error fetching data for ${pokemon.name}:`, error);
      }
    }
  }
  offset += limit; // 다음 오프셋 설정
  isLoading = false; // 로딩 종료
}

// 스크롤 이벤트 리스너
window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
    // 스크롤이 거의 끝에 도달했을 때 추가 포켓몬 로드
    loadPokemons();
  }
});

// 초기 로드
loadPokemons();