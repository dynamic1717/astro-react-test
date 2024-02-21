import { useGetPokemonByName } from '@shared/api'

interface Props {
  name: string
}

export const PokemonCard = ({ name }: Props) => {
  const { data, isLoading } = useGetPokemonByName(name)

  if (isLoading) {
    return (
      <div className="card-border h-40 flex items-center justify-center">Loading...</div>
    )
  }

  return (
    <a href={`/server-blog/${name}`} className="flex flex-col bg-light card-border pb-2">
      <img src={data?.sprites.front_default} alt={name} />
      <h3 className="font-semibold text-xl text-center capitalize text-secondary">
        {name}
      </h3>
    </a>
  )
}
