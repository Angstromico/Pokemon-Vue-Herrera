export interface IPokemonListResponse {
  count: number
  next: string
  previous: null
  results: IPokemonInfo[]
}

export interface IPokemonInfo {
  name: string
  url: string
}
