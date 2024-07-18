<template>
  <div>
    <div class="gameMainSec">
      <p class="gameTitle">포켓몬 미니게임</p>
      <div class="gameMinimiWrapper">
        <img src="@/assets/img/game_minimi.png" alt />
        <img src="@/assets/img/game_minimi.png" alt />
        <img src="@/assets/img/game_minimi.png" alt />
        <img src="@/assets/img/game_minimi.png" alt />
      </div>
      <div class="gameBoxSet">
        <router-link to="/minigame/poke_name_quiz">
          <div class="gameCon">
            <h3>내가 <span>누구</span>게요?</h3>
            <img src="@/assets/img/game_pokemon.png" alt="우파이미지" />
            <div>이름 퀴즈!</div>
          </div>
        </router-link>
        <router-link to="/minigame/poke_card">
          <div class="gameCon">
            <h3>내 <span>짝</span>을 찾아줘</h3>
            <img src="@/assets/img/game_card.png" alt="우파이미지" />
            <div>짝맞추기!</div>
          </div>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/pokeFooter.vue";
</script>

<style scoped>
.gameMainSec {
  /* height: calc(100vh - 60px); */
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gameTitle {
  font-size: 40px;
  color: #ec6666;
  margin-bottom: 10px;
}

.gameMinimiWrapper {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.gameBoxSet {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
}

.gameCon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
  padding: 33px 14px;
  width: 348px;
  height: 348px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  /* margin-top: 60px; */
}

.gameCon:hover {
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  transform: translateY(-10px);
  cursor: pointer;
}

.gameCon > h3 {
  font-size: 40px;
  font-weight: 400;
}

.gameCon > h3 > span {
  color: #e94242;
  font-size: 44px;
  font-weight: 400;
}

.gameCon > div {
  color: #4f4f4f;
  font-size: 28px;
  font-weight: 400;
}

@media (max-width: 800px) {
  /* .gameMainSec {
    padding: 250px 0 50px 0;
  } */
  .gameTitle {
    font-size: 32px;
  }
  .gameMinimiWrapper img {
    width: 40px;
  }
  .gameBoxSet {
    flex-direction: column;
    gap: 30px;
  }
  .gameCon {
    width: 250px;
    height: 250px;
  }
  .gameCon img {
    width: 80px;
  }
  .gameCon > h3 {
    font-size: 24px;
  }
  .gameCon > h3 > span {
    font-size: 28px;
  }
  .gameCon > div {
    font-size: 24px;
  }
}
</style>
