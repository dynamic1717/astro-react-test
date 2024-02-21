import { useGetPokemonList } from '@shared/api'
import { PokemonCard } from './PokemonCard'

export const PokemonList = () => {
  const { data, isLoading } = useGetPokemonList()

  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-6">
      {isLoading && <div>Loading...</div>}

      {data?.results.map((pokemon: any) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  )
}
