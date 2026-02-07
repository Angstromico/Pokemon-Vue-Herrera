<script setup lang="ts">
import { ref } from 'vue'
//import pokemonApi from '@/pokemons/api/pokemonApi'
//import type { IPokemonListResponse } from '@/pokemons/interfaces/pokemon-list.response'
import type { IPokemonDataResponse } from '@/pokemons/interfaces/pokemon-data.response'
import { getPokemons } from '../helpers/get-pokemons'

const pokemons = ref<IPokemonDataResponse[]>([])

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

getPokemons(10)
  .then((pokes: any) => {
    console.log(` Pokémon List:`, pokemons)
    pokemons.value = pokes
  })
  .catch((error: any) => {
    console.error('Error fetching Pokémon data:', error)
  })
</script>

<template>
  <div>
    <h1>Pokemon List</h1>
  </div>
</template>
