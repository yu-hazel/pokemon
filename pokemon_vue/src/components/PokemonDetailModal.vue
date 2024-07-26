<template>
  <v-card>
    <v-card-title>
      포켓몬 상세 정보
      <v-btn icon variant="text" @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <img :src="pokemon.sprite" alt="Pokemon Image" class="pokemon-image" />
      <v-tabs v-model="tab" class="tabs">
        <v-tab value="one">한국어</v-tab>
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
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemonStore";
import pokemonData from "@/assets/poke_details_data.json"; // JSON 데이터 가져오기

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const store = usePokemonStore();
const pokemon = ref({});
const tab = ref("one");

// 컴포넌트가 마운트될 때 선택된 포켓몬 정보 불러오기
onMounted(() => {
  // JSON 데이터에서 ID에 해당하는 포켓몬 찾기
  const selectedPokemon = pokemonData.find((p) => p.id === props.id);

  // 피니아 스토어에 저장된 포켓몬 정보 가져오기
  const storePokemon = store.pokemons.find((p) => p.id === props.id);

  // JSON 데이터와 피니아 스토어 데이터 병합
  pokemon.value = { ...selectedPokemon, ...storePokemon };
});
</script>
<style scoped>
.tabs {
  background-color: transparent;
}
.pokemon-image {
  width: 100px;
  height: auto;
}
</style>
