export const getPokemon = async (species) => {
    // const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(species)}`

    species = species.replace(' ', '-')

    const url = `https://pokeapi.co/api/v2/pokemon/${species}`
    const res = await fetch(url).then(p => p.json())
    
    const pokemon = {
        id: res.id,
        name: res.species.name.replace('-', ' '),
        sprite: res.sprites.front_default,
        shinySprite: res.sprites.front_shiny,
        types: res.types.map(type => {
            return type.type.name
        }),
        stats: res.stats.map(stat => {
            return {
                stat: stat.stat.name,
                value: stat.base_stat
            }
        }),
        abilities: res.abilities.map(ability => {
            return ability.ability.name
        }),
        height: res.height,
        weight: res.weight
    }

    return pokemon
}