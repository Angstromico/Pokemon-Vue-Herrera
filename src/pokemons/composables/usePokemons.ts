import { ref, computed, onMounted } from 'vue'
import { getPokemons } from '@/pokemons/helpers'
import type { IPokemonDataResponse } from '@/pokemons/interfaces'

const pokemons = ref<IPokemonDataResponse[]>([])
const isLoading = ref(true)

export const usePokemons = () => {
  // if (pokemons.value.length === 0) {
  //   getPokemons(10)
  //     .then((pokes: any) => {
  //       pokemons.value = pokes
  //       isLoading.value = false
  //     })
  //     .catch((error: any) => {
  //       console.error('Error fetching Pokémon data:', error)
  //     })
  // }

  const fetchPokemons = async (limit: number) => {
    try {
      const pokes = (await getPokemons(limit)) as IPokemonDataResponse[]
      pokemons.value = pokes
    } catch (error) {
      console.error('Error fetching Pokémon data:', error)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(async () => {
    if (pokemons.value.length === 0) {
      await fetchPokemons(10)
    }
  })

  return {
    pokemons,
    isLoading,
    count: computed(() => pokemons.value.length),
    countReady: computed(() => pokemons.value.length > 0)
  }
}
