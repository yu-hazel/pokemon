<template>
  <div id="app">
    <div class="gameContainer">
      <h1>내 짝을 찾아줘!</h1>

      <div class="cardGrid">
        <div
          v-for="pokemon in pokemonData"
          :key="pokemon.id"
          class="card"
          :class="{ flipped: pokemon.flipped, matched: pokemon.matched }"
          @click="flipCard(pokemon)"
        >
          <div class="front"></div>
          <div class="back">
            <img :src="getPokemonImageUrl(pokemon.url)" :alt="pokemon.name" />
          </div>
        </div>
      </div>
      <div :class="['gameComplete', { active: isGameComplete }]">
        <p>축하합니다! 모든 카드를 맞췄습니다!</p>
        <button class="restartButton" @click="restartGame">다시 하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "App",
  setup() {
    const pokemonData = ref([]);
    const firstCard = ref(null);
    const secondCard = ref(null);
    const lockBoard = ref(false);
    const matches = ref(0);
    const isGameComplete = ref(false);

    const loadPokemons = async () => {
      const offset = Math.floor(Math.random() * 1000);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`
      );
      const data = await response.json();
      const pokemons = data.results;

      pokemonData.value = [...pokemons, ...pokemons].map((pokemon) => ({
        ...pokemon,
        id: Math.random(),
        flipped: false,
        matched: false,
      }));

      pokemonData.value.sort(() => Math.random() - 0.5);
      matches.value = 0;
      isGameComplete.value = false;
    };

    const getPokemonImageUrl = (url) => {
      const parts = url.split("/");
      const id = parts[parts.length - 2];
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    };

    const flipCard = (pokemon) => {
      if (lockBoard.value) return;
      if (firstCard.value && firstCard.value.id === pokemon.id) return;

      pokemon.flipped = true;

      if (!firstCard.value) {
        firstCard.value = pokemon;
        return;
      }

      secondCard.value = pokemon;
      lockBoard.value = true;

      checkForMatch();
    };

    const checkForMatch = () => {
      const isMatch = firstCard.value.name === secondCard.value.name;

      isMatch ? disableCards() : unflipCards();
    };

    const disableCards = () => {
      firstCard.value.matched = true;
      secondCard.value.matched = true;
      resetBoard();
      matches.value++;

      if (matches.value === 10) {
        setTimeout(showGameComplete, 500);
      }
    };

    const unflipCards = () => {
      setTimeout(() => {
        firstCard.value.flipped = false;
        secondCard.value.flipped = false;
        resetBoard();
      }, 1000);
    };

    const resetBoard = () => {
      firstCard.value = null;
      secondCard.value = null;
      lockBoard.value = false;
    };

    const showGameComplete = () => {
      isGameComplete.value = true;
    };

    const restartGame = () => {
      window.location.reload();
    };

    onMounted(loadPokemons);

    return {
      pokemonData,
      isGameComplete,
      getPokemonImageUrl,
      flipCard,
      restartGame,
    };
  },
};
</script>

<style scoped>
@import url("https://webfontworld.github.io/DungGeunMo/DungGeunMo.css");
/* 둥근모꼴 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "DungGeunMo";
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #ffffff;
}

h1 {
  margin-bottom: 30px;
  font-size: 28px;
}

.gameContainer {
  text-align: center;
  height: 100%;
  padding: 100px 0;
  width: 70vw;
}

.cardGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 20px;
  aspect-ratio: 5 / 4;
  width: 100%;
}

.card {
  width: 155px;
  height: 205px;
  width: calc((70vw - 10px) / 5);
  height: calc((205 / 155) * ((70vw - 10px) / 5));
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card .front,
.card .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
}

.card .front {
  background: url("@/assets/img/pokeCard.png") no-repeat center center;
  background-size: cover;
  transform: rotateY(0deg);
}

.card .back {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  border: 5px solid #828282;
}

.card img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.card.matched .back {
  transform: rotateY(180deg);
}

.card.matched .front {
  transform: rotateY(0);
}

.blur {
  filter: blur(5px);
  pointer-events: none;
}

.gameComplete {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 75vw;
  transform: translate(-50%, -50%);
  font-size: 20px;
  background: rgba(255, 255, 255, 0.7);
  color: #373737;
  padding: 20px;
  border-radius: 10px;
  z-index: 10;
}

.gameComplete.active {
  display: block;
}

.restartButton {
  padding: 10px 20px;
  border: none;
  background-color: #fda7a7;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
  color: #fff;
}

.restartButton:hover {
  opacity: 0.6;
}

body.darkMode .card .front {
  background: url("./assets/img/pokeCard_dark02.png") no-repeat center center;
  background-size: cover;
}

body.darkMode .card .back {
  background-color: #bfbfbf;
}

body.darkMode .gameComplete {
  background: rgb(77 77 77 / 70%);
  color: #fff;
}
</style>
