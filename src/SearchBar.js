import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const SearchBar = ({setPokemonName, pokemonName}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = e => setInputValue(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    if (inputValue.trim().length > 0) {
      setPokemonName(inputValue)
      setInputValue('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Enter a pokemon'
            value={inputValue}
            onChange={handleInputChange}
        />
   </form>
  )
}

SearchBar.propTypes = {
  setPokemonName: PropTypes.func.isRequired
}
