import { useEffect, useState } from 'react'
import { FastAverageColor } from 'fast-average-color'

interface Props {
  data: any
}

const fac = new FastAverageColor()

export const PokemonInfo = ({ data }: Props) => {
  const [bg, setBg] = useState('#cee7fd')

  useEffect(() => {
    if (!data) return

    fac
      .getColorAsync(data.sprites.other['official-artwork'].front_default)
      .then((color) => {
        setBg(color.hex)
      })
  }, [data])

  return (
    <>
      <div className="flex items-center justify-between text-xl font-semibold text-secondary">
        <h2>Pokemon</h2>
        <h3>#{String(data.id).padStart(3, '0')}</h3>
      </div>

      <div className="grid grid-cols-[25rem_1fr] gap-x-6 mt-4">
        <section className="card-border bg-light flex items-center justify-center">
          <img
            id="pokemon-image"
            src={data.sprites.other['official-artwork'].front_default}
            alt={data.name}
            className="w-full object-contain"
          />
        </section>

        <section
          className="space-y-2 text-xl card-border p-4"
          style={{ background: `linear-gradient(90deg, #cee7fd, ${bg})` }}
        >
          <h1>
            Name: <span className="uppercase font-semibold">{data.name}</span>
          </h1>
          <p>
            Height: <span className="uppercase font-semibold">{data.height}</span>
          </p>
          <p>
            Weight: <span className="uppercase font-semibold">{data.weight}</span>
          </p>
          <p>
            Abilities:
            {data.abilities.map((ability: any) => (
              <span key={ability.ability.name} className="block uppercase font-semibold">
                {ability.ability.name}
              </span>
            ))}
          </p>
          <p>
            Types:
            {data.types.map((type: any) => (
              <span key={type.type.name} className="block uppercase font-semibold">
                {type.type.name}
              </span>
            ))}
          </p>
        </section>
      </div>
    </>
  )
}
