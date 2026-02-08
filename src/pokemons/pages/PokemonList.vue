<script setup lang="ts">
//import { ref /* watch */ } from 'vue'
//import pokemonApi from '@/pokemons/api/pokemonApi'
//import type { IPokemonListResponse } from '@/pokemons/interfaces/pokemon-list.response'
//import type { IPokemonDataResponse } from '@/pokemons/interfaces/pokemon-data.response'
//import { getPokemons as getPokemonsHelper /*, sleep */ } from '@/pokemons/helpers'
import { usePokemons } from '../composables/usePokemons'
//import { useQuery } from '@tanstack/vue-query'
//import { computed } from 'vue'
import CardList from '../components/CardList.vue'

//await sleep(500) //Simulate loading time

//const selectedPokemons = (await getPokemons(10)) as IPokemonDataResponse[] //This only works with Suspense active

//const pokemons = ref<IPokemonDataResponse[]>([] /* selectedPokemons */)

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

// watch(pokemons, (newValue) => {
//   console.log('Pokemons updated:', newValue)
// })

//const { pokemons, isLoading, count, countReady } = usePokemons()

// import type { IPokemonDataResponse } from '@/pokemons/interfaces/pokemon-data.response'

// const limit = ref(10)

// const fetchPokemons = async (limitValue: number): Promise<IPokemonDataResponse[]> => {
//   return (await getPokemonsHelper(limitValue)) as IPokemonDataResponse[]
// }

// const getPokemons: import('@tanstack/vue-query').QueryFunction<
//   IPokemonDataResponse[]
// > = async () => {
//   // You can set a default limit here if needed, e.g., 10
//   return (await getPokemonsHelper(10)) as IPokemonDataResponse[] //How do I made the 10 Dynamic?
// }

// const {
//   data: pokemons,
//   isLoading
//   // isSuccess
// } = useQuery<IPokemonDataResponse[]>({
//   queryKey: ['pokemons', { limit }],
//   queryFn: () => fetchPokemons(limit.value)
// })

// const count = computed(() => (Array.isArray(pokemons.value) ? pokemons.value.length : 0))
const { pokemons, isLoading, count, limit, isError, error } = usePokemons()

const increaseDecreaseLimit = (operation: 'increase' | 'decrease') => {
  if (operation === 'increase') {
    limit.value += 5
  } else if (operation === 'decrease') {
    if (limit.value <= 5) {
      alert('Limit cannot be less than or equal to five.')
      return
    }
    limit.value -= 5
  }
}
</script>

<template>
  <div>
    <h1>Pokemon List</h1>
    <div class="counter-btns">
      <!-- Those buttons doesn't change the count, Why? -->
      <button @click="increaseDecreaseLimit('increase')" :disabled="isLoading">
        Increase count on five
      </button>
      <button @click="increaseDecreaseLimit('decrease')" :disabled="isLoading">
        Decrease count on five
      </button>
    </div>
    <p v-if="!isLoading">Count: {{ count }}</p>
    <p v-if="isLoading">Loading...</p>

    <div v-if="isError" class="error">
      <p>Error: {{ error }}</p>
    </div>
    <CardList v-else :pokemons="pokemons ?? []" />
  </div>
</template>

<style scoped>
.list-title {
  margin: 0;
  padding: 0;
  text-transform: capitalize;
}
p {
  font-size: 1.2rem;
  font-weight: bold;
}
.counter-btns {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
button {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.error {
  color: red;
  font-weight: bold;
}
</style>

<!-- generate here a pagination for the Pokemons, no more of 10 per page please -->
