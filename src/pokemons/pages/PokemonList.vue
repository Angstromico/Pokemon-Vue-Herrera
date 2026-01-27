<script setup lang="ts">
import pokemonApi from '@/api/pokemonApi'

pokemonApi
  .get('/pokemon?limit=10')
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error('Error fetching Pokémon data:', error)
  })
</script>

<template>
  <div>
    <h1>Pokemon List</h1>
  </div>
</template>
