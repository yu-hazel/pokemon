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
</script>
<style>
@import "@/assets/pokeMain.css";
</style>
