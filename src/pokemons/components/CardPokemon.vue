<script setup lang="ts">
import type { IPokemonDataResponse } from '@/pokemons/interfaces/pokemon-data.response'

interface Props {
  pokemon: IPokemonDataResponse
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <h2>{{ pokemon?.name }}</h2>
    <ul class="skills">
      <li v-for="ability in pokemon?.abilities || []" :key="ability?.ability?.name">
        {{ ability?.ability?.name }}
      </li>
    </ul>
    <img :src="pokemon?.sprites?.front_default" :alt="pokemon?.name" />
    <div class="roar">
      <p>{{ pokemon?.name }} says: Roar!</p>
      <audio controls>
        <source :src="pokemon?.cries.latest" />
        <source :src="pokemon?.cries.legacy" />
      </audio>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 250px;
  box-sizing: border-box;
  cursor: pointer;
}
h2 {
  text-transform: capitalize;
  font-size: 1.5rem;
  margin: 0;
}
.skills {
  padding: 0;
  margin: 0.5rem 0 0 0;
}
.skills li {
  text-transform: capitalize;
  font-size: 1.2rem;
  margin: 0.25rem 0;
}
img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 5px 5px 0 0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}
img:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}
audio {
  margin-top: 0.5rem;
  width: 100%;
  max-width: 220px;
}
.roar {
  margin-top: 1rem;
  font-style: italic;
  text-transform: capitalize;
}
source {
  margin-top: 0.25rem;
}
</style>
