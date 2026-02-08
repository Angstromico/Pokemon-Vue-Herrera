<script setup lang="ts">
import CardPokemon from './CardPokemon.vue'
import type { IPokemonDataResponse } from '@/pokemons/interfaces'

interface Props {
  pokemons?: IPokemonDataResponse[]
}

defineProps<Props>()
</script>

<template>
  <div class="card-list">
    <CardPokemon v-for="pokemon in pokemons || []" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<style scope>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
