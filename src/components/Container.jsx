import { useFetchPokemon } from "../hooks/useFetchPokemon"

export const Container = ({pokemonName}) => {

    const { pokemon, isLoading } = useFetchPokemon(pokemonName)

    return (
        <div>{pokemon}</div>
    )
}
