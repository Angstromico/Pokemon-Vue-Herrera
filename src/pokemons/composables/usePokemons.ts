import { ref, computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getPokemons as getPokemonsHelper } from '@/pokemons/helpers'
import type { IPokemonDataResponse } from '@/pokemons/interfaces'

export const usePokemons = () => {
  const limit = ref(10)

  const fetchPokemons = async (limitValue: number): Promise<IPokemonDataResponse[]> => {
    return (await getPokemonsHelper(limitValue)) as IPokemonDataResponse[]
  }

  const {
    data: pokemons,
    isLoading,
    isError,
    error
  } = useQuery<IPokemonDataResponse[]>({
    queryKey: ['pokemons', { limit }],
    queryFn: () => fetchPokemons(limit.value)
  })

  const count = computed(() => (Array.isArray(pokemons.value) ? pokemons.value.length : 0))
  return {
    pokemons,
    isLoading,
    count,
    limit,
    isError,
    error
  }
}
