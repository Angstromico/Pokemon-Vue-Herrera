<script setup lang="ts">
import { ref, watch } from 'vue'
//import pokemonApi from '@/pokemons/api/pokemonApi'
//import type { IPokemonListResponse } from '@/pokemons/interfaces/pokemon-list.response'
import type { IPokemonDataResponse } from '@/pokemons/interfaces/pokemon-data.response'
import { getPokemons, sleep } from '@/pokemons/helpers'

await sleep(500) //Simulate loading time

const selectedPokemons = (await getPokemons(10)) as IPokemonDataResponse[] //This only works with Suspense active

const pokemons = ref<IPokemonDataResponse[]>(selectedPokemons)

// pokemonApi
//   .get<IPokemonListResponse>('/pokemon?limit=10')
//   .then((response) => {
//     console.log(response.data.results[0].name.toUpperCase())
//   })
//   .catch((error) => {
//     console.error('Error fetching Pokémon data:', error)
//   })

// pokemonApi
//   .get<IPokemonDataResponse>('/pokemon/1')
//   .then((response) => {
//     console.log(response.data.abilities)
//   })
//   .catch((error) => {
//     console.error('Error fetching Pokémon data:', error)
//   })

// getPokemons(10)
//   .then((pokes: any) => {
//     pokemons.value = pokes
//   })
//   .catch((error: any) => {
//     console.error('Error fetching Pokémon data:', error)
//   })

watch(pokemons, (newValue) => {
  console.log('Pokemons updated:', newValue)
})
</script>

<template>
  <div>
    <h1>Pokemon List</h1>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        <h2 class="list-title">{{ pokemon.name }}</h2>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list-title {
  margin: 0;
  padding: 0;
  text-transform: capitalize;
}
</style>
