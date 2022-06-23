import { useState } from "react"

export const SearchBar = ({onNewPokemon}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => setInputValue(target.value)

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length < 1) return
        onNewPokemon(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Enter a category'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
