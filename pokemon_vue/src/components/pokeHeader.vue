<template>
  <div>
    <header>
      <img id="menuBt" src="@/assets/img/pika.png" alt @click.stop="toggleMenu" />
      <div class="menu" :class="{ on: isMenuOn }">
        <div class="catMenu">
          <router-link to= /> 도감</router-link>
          <router-link to=/minigame> 미니게임</router-link>
        </div>
        <div class="userMenu">
          <p class="langText">
            <img src="@/assets/img//lang.png" alt id="lang" />한국어
          </p>
          <span class="updateNotice">현재는 한국어만 지원됩니다. 추후 일본어 영어 지원 예정!</span>
          <p><img src="@/assets/img//login.png" alt id="login" />로그인</p>
        </div>
        <img id="monsterBall" src="@/assets/img//monster_ball.png" alt @click.stop="toggleMenu" />
      </div>
      <div id="lightDarkToggle">light, dark mode toggle</div>
    </header>
    <i class="fa-solid fa-circle-arrow-up" id="scrollUp"></i>
  </div>
</template>
<script setup>
const isMenuOn = ref(false);
// 메뉴를 토글하는 함수
const toggleMenu = () => {
  isMenuOn.value = !isMenuOn.value;
};
</script>
