export const fetchPokemon = async (species) => {
    let pokemonList = []

    species = species.toString().replace(' ', '-')
    const url = `https://pokeapi.co/api/v2/pokemon/${species}`
    const res = await fetch(url)
    const data = await res.json()

    const pokemon = {
        id: data.id,
        name: data.species.name.replace('-', ' '),
        sprite: data.sprites.front_default,
        shinySprite: data.sprites.front_shiny,
        types: data.types.map(type => {
            return type.type.name
        }),
        stats: data.stats.map(stat => {
            return {
                stat: stat.stat.name,
                value: stat.base_stat
            }
        }),
        abilities: data.abilities.map(ability => {
            return ability.ability.name
        }),
        height: data.height / 10,
        weight: data.weight / 10
    }

    pokemonList.push(pokemon)
    
    return pokemonList
}
