<template>
  <div>
    <div class="test">게임메인입니다!</div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/pokeFooter.vue";
</script>
<style scoped>
.test {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
