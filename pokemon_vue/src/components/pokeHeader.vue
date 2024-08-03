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
             <img v-if="!isDarkMode" src="@/assets/img/lang.png" alt id="lang" />
            <img v-else src="@/assets/img/lang_dark.png" alt id="lang" />
            한국어
          </p>
          <span class="updateNotice" v-show="isUpdateNoticeVisible">현재는 한국어만 지원됩니다. 추후 일본어 영어 지원 예정!</span>
          <p class="login"><img v-if="!isDarkMode" src="@/assets/img/login.png" alt id="login" /><img v-else src="@/assets/img/login_dark.png" alt id="login" />로그인</p>
        </div>
        <img id="monsterBall" src="@/assets/img/monster_ball.png" alt @click.stop="toggleMenu" />
      </div>
      <div id="lightDarkToggle">light, dark mode toggle</div>
    </header>
      <div class="nes-btn is-error" id="scrollUp">
        <span>&gt;</span></div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";

const isMenuOn = ref(false);
const isUpdateNoticeVisible = ref(false);
const isDarkMode = ref(false);

// 메뉴를 토글하는 함수
const toggleMenu = () => {
  isMenuOn.value = !isMenuOn.value;
};

// 한국어 지원 피드백문구
const showUpdateNotice = () => {
  isUpdateNoticeVisible.value = true;
};

const hideUpdateNotice = () => {
  isUpdateNoticeVisible.value = false;
};

// 다크모드 상태 감지 함수
const checkDarkMode = () => {
  isDarkMode.value = document.body.classList.contains("darkMode");
};

// watch를 사용하여 body 클래스 변화를 감지
watch(isDarkMode, (newValue) => {
  // console.log(`Dark mode is ${newValue ? 'on' : 'off'}`);
});

// body에 다크모드 클래스가 추가될 때마다 checkDarkMode 함수를 호출
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      checkDarkMode();
    }
  });
});

// body 클래스를 감시
onMounted(() => {
  observer.observe(document.body, { attributes: true });
  checkDarkMode(); // 초기 상태 설정
});

onBeforeUnmount(() => {
  observer.disconnect();
});
</script>