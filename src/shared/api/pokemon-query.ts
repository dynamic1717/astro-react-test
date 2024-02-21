import { useQuery } from '@tanstack/react-query'
import { queryClient } from './query-client'

export const serverUrl = import.meta.env.PUBLIC_POKEMON_API

export const useGetPokemonList = () => {
  return useQuery(
    {
      queryKey: ['pokemon', 'list'],
      queryFn: async () => {
        const res = await fetch(`${serverUrl}pokemon?limit=15&offset=0`)
        return res.json()
      },
    },
    queryClient,
  )
}

export const useGetPokemonByName = (name: string) => {
  return useQuery(
    {
      queryKey: ['pokemon', 'name', name],
      queryFn: async () => {
        const res = await fetch(`${serverUrl}pokemon/${name}`)
        return res.json()
      },
      placeholderData: (prev) => prev,
      enabled: !!name,
    },
    queryClient,
  )
}
