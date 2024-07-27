// src/stores/pokemonStore.js
import { defineStore } from 'pinia';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    loadedPokemonNames: new Set(),
  }),
  actions: {
    // addPokemons(newPokemons) {
    //   this.pokemons.push(...newPokemons);
    //   newPokemons.forEach(pokemon => {
    //     this.loadedPokemonNames.add(pokemon.name);
    //   });
    //   this.offset += newPokemons.length;
    // },
    // clearPokemons() {
    //   this.pokemons = [];
    //   this.loadedPokemonNames.clear();
    //   this.offset = 0;
    // },
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