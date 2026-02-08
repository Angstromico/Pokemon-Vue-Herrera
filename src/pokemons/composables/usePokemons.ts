import { ref, computed } from 'vue'
import { getPokemons } from '@/pokemons/helpers'
import type { IPokemonDataResponse } from '@/pokemons/interfaces'

export const usePokemons = () => {
  const pokemons = ref<IPokemonDataResponse[]>([])
  const isLoading = ref(true)

  getPokemons(10)
    .then((pokes: any) => {
      pokemons.value = pokes
      isLoading.value = false
    })
    .catch((error: any) => {
      console.error('Error fetching Pokémon data:', error)
    })

  return {
    pokemons,
    isLoading,
    count: computed(() => pokemons.value.length),
    countReady: computed(() => pokemons.value.length > 0)
  }
}
