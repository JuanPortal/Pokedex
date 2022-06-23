import { useEffect, useState } from "react"
import { fetchPokemon } from "../helpers/fetchPokemon"

export const useFetchPokemon = (pokemonName) => {
    const [pokemon, setPokemon] = useState([])
    const [isLoading, setIsLoading] = useState([])

    const getPokemon = async () => {
        const newPokemon = await fetchPokemon(pokemonName)
        setPokemon(newPokemon)
        setIsLoading(false)
    }

    useEffect(() => {
        getPokemon()
    }, [])


    return {
        pokemon,
        isLoading
    }
}
