<template>
  <div>
    <header>
      <img id="menuBt" src="@/assets/img/pika.png" alt @click.stop="toggleMenu" />
      <div class="menu " :class="{ on: isMenuOn }">
        <div class="catMenu">
          <router-link to= /> 도감</router-link>
          <router-link to=/minigame> 미니게임</router-link>
        </div>
        <div class="userMenu">
          <p class="langText" @mouseover="showUpdateNotice" @mouseout="hideUpdateNotice">
            <img src="@/assets/img//lang.png" alt id="lang" />한국어
          </p>
          <span class="updateNotice" v-show="isUpdateNoticeVisible">현재는 한국어만 지원됩니다. 추후 일본어 영어 지원 예정!</span>
          <p class="login"><img src="@/assets/img//login.png" alt id="login" />로그인</p>
        </div>
        <img id="monsterBall" src="@/assets/img//monster_ball.png" alt @click.stop="toggleMenu" />
      </div>
      <div id="lightDarkToggle">light, dark mode toggle</div>
    </header>
      <div class="nes-btn is-error" id="scrollUp">
        <span>&gt;</span></div>
  </div>
</template>
<script setup>
  import { ref } from "vue";

const isMenuOn = ref(false);
// 메뉴를 토글하는 함수
const toggleMenu = () => {
  isMenuOn.value = !isMenuOn.value;
};

//한국어 지원 피드백문구
 const isUpdateNoticeVisible = ref(false);

    const showUpdateNotice = () => {
      isUpdateNoticeVisible.value = true;
    };

    const hideUpdateNotice = () => {
      isUpdateNoticeVisible.value = false;
    };

</script>