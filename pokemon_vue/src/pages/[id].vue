<template>
  <div class="modal">
    <div class="modal-content">
      <div>포켓몬 상세 정보</div>
      <img :src="pokemon.sprite" alt="Pokemon Image" class="pokemon-image" />
      <v-tabs v-model="tab" class="tabs">
        <v-tab value="one"> 한국어</v-tab>
        <v-tab value="two">English</v-tab>
        <v-tab value="three">日本語</v-tab>
      </v-tabs>
      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <p>포켓몬 이름: {{ pokemon.names?.korean }}</p>
            <p>{{ pokemon.descriptions?.korean }}</p>
            <p>키: {{ pokemon.height / 10 }} m</p>
            <p>몸무게: {{ pokemon.weight / 10 }} kg</p>
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <p>Pokemon Name: {{ pokemon.names?.english }}</p>
            <p>{{ pokemon.descriptions?.english }}</p>
            <p>Height: {{ pokemon.height / 10 }} m</p>
            <p>Weight: {{ pokemon.weight / 10 }} kg</p>
          </v-tabs-window-item>

          <v-tabs-window-item value="three">
            <p>ポケモンの名前: {{ pokemon.names?.japanese }}</p>
            <p>{{ pokemon.descriptions?.japanese }}</p>
            <p>高さ: {{ pokemon.height / 10 }} m</p>
            <p>重さ: {{ pokemon.weight / 10 }} kg</p>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>

      <router-link to="/">Close</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import pokemonData from "@/assets/poke_details_data.json";

const route = useRoute();
const pokemon = ref({});

onMounted(() => {
  const id = route.params.id;
  pokemon.value = pokemonData.find((p) => p.id == id);
  // console.log("Pokemon Data:", pokemon.value); // 콘솔에 로드된 데이터 출력
});
</script>
<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>
<style scoped>
.tabs {
  background-color: transparent;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
}
body.darkMode .modal-content {
  background: rgb(37, 37, 37);
}
</style>
