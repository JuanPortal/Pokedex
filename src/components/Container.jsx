import { useFetchPokemon } from "../hooks/useFetchPokemon"
import { Card } from "./Card"

export const Container = ({ pokemonName }) => {

    const { pokemon, isLoading } = useFetchPokemon(pokemonName)

    return (
        <div className='container'>
            {
                isLoading && <h3>Loading...</h3>
            }

            <div className='card'>
                {
                    pokemon.map(mon => (
                        <Card key={mon.id} pokemon={mon} />
                    ))
                }
            </div>
        </div>
    )
}
