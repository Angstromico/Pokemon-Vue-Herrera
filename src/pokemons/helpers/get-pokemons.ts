import axios from 'axios'
import pokemonApi from '@/pokemons/api/pokemonApi'
import type { IPokemonListResponse, IPokemonDataResponse } from '@/pokemons/interfaces'

interface IPokemonsData {
  data: IPokemonDataResponse
}

export const getPokemons = async (limit: number = 45) => {
  try {
    const { data } = await pokemonApi.get<IPokemonListResponse>(`/pokemon?limit=${limit}`)
    const pokemons: IPokemonDataResponse[] = []

    for (const pokemon of data.results) {
      console.log(pokemon)

      const pokemonData: IPokemonsData = await axios.get(pokemon.url)
      pokemons.push(pokemonData.data)
    }

    return pokemons
  } catch (error) {
    return error
  }
}
