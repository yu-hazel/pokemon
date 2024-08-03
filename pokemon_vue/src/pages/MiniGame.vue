<template>
  <div>
    <div class="gameMainSec">
      <p class="gameTitle">포켓몬 미니게임 <i class="snes-jp-logo"></i></p>
      <div class="messageCon">
        <section class="message -right">
          <div class="nes-balloon from-right">
            <p>포켓몬 퀴즈에 도전해보자!</p>
          </div>
        </section>
        <i class="nes-charmander"></i>
      </div>
      <div class="gameBoxSet">
        <router-link to="/minigame/namequiz">
          <div class="gameCon nes-container is-rounded">
            <h3>내가 <span>누구</span>게요?</h3>
            <img src="@/assets/img/game_pokemon.png" alt="우파이미지" />
            <div>이름 퀴즈!</div>
          </div>
        </router-link>
        <router-link to="/minigame/pokecard">
          <div class="gameCon nes-container is-rounded">
            <h3>내 <span>짝</span>을 찾아줘</h3>
            <img
              v-if="isDarkMode"
              src="@/assets/img/game_card_dark.png"
              alt="카드이미지"
            />
            <img v-else src="@/assets/img/game_card.png" alt="카드이미지" />
            <div>짝맞추기!</div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
// import Footer from "@/components/pokeFooter.vue";

// isDarkMode 상태 선언
const isDarkMode = ref(false);

const applyDarkModeClasses = () => {
  const balloon = document.querySelector(".nes-balloon");
  const gameCon = document.querySelectorAll(".gameCon");

  if (balloon) {
    if (isDarkMode.value) {
      balloon.classList.add("is-dark");
    } else {
      balloon.classList.remove("is-dark");
    }
  }

  if (gameCon.length > 0) {
    gameCon.forEach((element) => {
      if (isDarkMode.value) {
        element.classList.add("is-dark");
      } else {
        element.classList.remove("is-dark");
      }
    });
  }
};

onMounted(() => {
  // 초기 darkMode 상태 설정
  isDarkMode.value = document.body.classList.contains("darkMode");
  nextTick(applyDarkModeClasses); // 초기 상태 적용

  // MutationObserver를 사용해 body 클래스 변화를 감지
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        isDarkMode.value = document.body.classList.contains("darkMode");
        nextTick(applyDarkModeClasses); // 클래스 변경 후 상태 적용
      }
    });
  });

  // body 클래스를 감시
  observer.observe(document.body, { attributes: true });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
/* 라이브러리 */
.gameCon.nes-container.is-rounded {
  border-image-repeat: initial;
  border-image-width: 13px;
  border-image-outset: 1;
  /* background-color: transparent; */
}
.gameCon.nes-container.is-rounded {
  border-radius: 11px;
}
.gameCon.nes-container.is-rounded:hover {
  border-radius: 0px;
}
.gameCon.nes-container.is-dark.is-rounded:hover {
  border-radius: 0px;
}
.nes-balloon {
  background-color: transparent;
  border-radius: 10px;
}
.nes-balloon.is-dark,
.nes-balloon.is-dark.nes-balloon.is-dark.from-right::before {
  box-shadow: none;
}

/* 포켓몬 크기 */
.nes-charmander {
  width: 80px;
  height: 80px;
}
/* 게임 말풍선+포켓몬 */
.messageCon {
  display: flex;
  gap: 20px;
}
.nes-balloon > p {
  color: #000;
}

.gameMainSec {
  height: 100vh;
  padding: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gameTitle {
  font-size: 40px;
  color: #001cec;
  margin-bottom: 10px;
}

.gameSet,
.gameSetDark {
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
}

.gameCon:hover {
  transform: translateY(-10px);
  cursor: pointer;
}

.gameCon > h3 {
  font-size: 40px;
  font-weight: 400;
}

.gameCon > h3 > span {
  color: #001cec;
  font-size: 44px;
  font-weight: 400;
}

.gameCon > img {
  height: 145px;
}

.gameCon > div {
  color: #4f4f4f;
  font-size: 28px;
  font-weight: 400;
}

/* 다크모드 */
body.darkMode {
  background-color: #313131;
}

body.darkMode .gameTitle {
  color: #fff;
}

body.darkMode .gameCon {
  /* background: #818181; */
  color: #ffffff;
}

body.darkMode .nes-balloon > p {
  color: #ffffff;
}

body.darkMode .gameCon > div[data-v-30ae130e] {
  color: #d2d2d2;
}

@media (max-width: 800px) {
  .gameMainSec {
    height: 100%;
  }
  .gameTitle {
    font-size: 32px;
    text-align: center;
  }
  .messageCon {
    display: flex;
    /* 컬럼 */
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .nes-charmander {
    width: 80px;
    height: 80px;
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
<style>
/* 스크롤바를 숨기기 위해 추가 */
/* html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden;
} */
</style>
