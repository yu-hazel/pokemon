<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/pokeHeader.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import {
  setupDarkModeToggle,
  setupScrollToTopButton,
} from "@/utils/darkModeAndScroll.js";

const route = useRoute();

// 상태 변수 선언 이후 onMounted 안에 추가
onMounted(() => {
  setupDarkModeToggle();
  setupScrollToTopButton();
});
</script>
<style>
@import "@/assets/pokeMain.css";
</style>
