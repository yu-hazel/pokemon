<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/pokeFooter.vue";
import Header from "@/components/pokeHeader.vue";
</script>
