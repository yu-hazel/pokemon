<template>
  <div>
    <header>
      <img
        id="menuBt"
        src="@/assets/img/pika.png"
        alt
        @click.stop="toggleMenu"
      />
      <div class="menu" :class="{ on: isMenuOn }">
        <div class="catMenu">
          <a href="@/assets/html/pokemon_main.html">도감</a>
          <a href="@/assets/html/pokemon_game_main.html">미니게임</a>
        </div>
        <div class="userMenu">
          <p><img src="@/assets/img/lang.png" alt id="lang" />한국어</p>
          <p><img src="@/assets/img/login.png" alt id="login" />로그인</p>
        </div>
        <img
          id="monsterBall"
          src="@/assets/img/monster_ball.png"
          alt
          @click.stop="toggleMenu"
        />
      </div>
      <div id="lightDarkToggle" @click="toggleDarkMode">
        light, dark mode toggle
      </div>
    </header>
    <div class="mainSec">
      <div>
        <h2>우리만의 포켓몬 도감</h2>
        <div class="searchBar">
          <input type="text" placeholder="포켓몬을 검색해보세요!" id="search" />
          <button id="searchBt">검색</button>
        </div>
      </div>
      <div>
        <div class="type">
          <p class="typeTitle">속성으로 찾아보기</p>
          <div class="typeGroup">
            <p class="normal">노말</p>
            <p class="fighting">격투</p>
            <p class="poison">독</p>
            <p class="ground">땅</p>
            <p class="flying">비행</p>
            <p class="bug">벌레</p>
            <p class="rock">바위</p>
            <p class="water">물</p>
            <p class="steel">강철</p>
            <p class="ghost">고스트</p>
            <p class="fire">불꽃</p>
            <p class="electric">전기</p>
            <p class="grass">풀</p>
            <p class="ice">얼음</p>
            <p class="psychic">에스퍼</p>
            <p class="dragon">드래곤</p>
            <p class="dark">악</p>
            <p class="fairy">페어리</p>
          </div>
        </div>
        <div class="sort">번호순 (오름차순)</div>
        <div class="cardSec">
          <!-- 카드 섹션은 필요에 따라 추가 -->
        </div>
      </div>
    </div>
    <i
      class="fa-solid fa-circle-arrow-up"
      id="scrollUp"
      @click="scrollToTop"
    ></i>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 메뉴 토글 상태와 다크 모드 상태를 위한 반응형 변수
const isMenuOn = ref(false);
const isDarkMode = ref(false);

// 메뉴를 토글하는 함수
const toggleMenu = () => {
  isMenuOn.value = !isMenuOn.value;
};

// 주어진 셀렉터와 클래스 이름으로 요소의 클래스를 토글하는 함수
const toggleClass = (selector, className) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.classList.toggle(className);
  });
};

// 주어진 이미지 요소의 소스를 토글하는 함수
const toggleImage = (elementId, lightSrc, darkSrc) => {
  const img = document.getElementById(elementId);
  img.src = img.src.endsWith(lightSrc) ? darkSrc : lightSrc;
};

// 다크 모드를 토글하는 함수
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;

  // 여러 요소에 다크 모드 클래스를 토글
  toggleClass("body", "darkMode");

  // 이미지 소스를 다크 모드 이미지로 토글
  toggleImage("@/assets/imglang.png", "@/assets/img/lang_dark.png");
  toggleImage("@/assets/img/login.png", "@/assets/img/login_dark.png");

  // 검색 버튼의 배경 이미지를 다크 모드 이미지로 토글
  const searchBt = document.getElementById("searchBt");
  const searchBtStyle = window.getComputedStyle(searchBt);
  searchBt.style.backgroundImage = searchBtStyle.backgroundImage.includes(
    "@/assets/img/search_icon.png"
  )
    ? 'url("@/assets/img/search_dark.png")'
    : 'url("@/assets/img/search_icon.png")';

  toggleClass(".cardOne", "darkBtn");
};

// 화면을 최상단으로 스크롤하는 함수
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
@import "@/assets/pokeHeader.css";
</style>
