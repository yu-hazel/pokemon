// src/stores/pokemonStore.js
import { defineStore } from 'pinia';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    loadedPokemonNames: new Set(),
  }),
  actions: {
    modalAddPokemons(newPokemons) {
      newPokemons.forEach(pokemon => {
        if (!this.loadedPokemonNames.has(pokemon.name)) {
          this.pokemons.push(pokemon);
          this.loadedPokemonNames.add(pokemon.name);
        }
      });
    }
  },
});