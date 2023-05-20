import { useFetchPokemon } from "../hooks/useFetchPokemon"
import { Card } from "./Card"

export const Container = ({ pokemonName }) => {

    const { pokemon, isLoading } = useFetchPokemon(pokemonName)

    return (
        <div className='container'>
            {
                // isLoading && <h3>Loading...</h3>
            }

            <div className="pokedex">
                <img src="http://imgfz.com/i/OgyZS31.png" title='Pokédex top piece' alt='Pokédex top piece' />
                <div className='card'>
                    {
                        pokemon.map(mon => (
                            <Card key={mon.id} pokemon={mon} />
                        ))
                    }
                </div>
                <img src="http://imgfz.com/i/RMGeJLF.png" title='Pokédex bottom piece' alt='Pokédex bottom piece' />
            </div>
        </div>
    )
}
