import React from 'react';
import './Pokemon.css'

const Pokemon = (pokemon) => {
    if(pokemon.pokemon === null) return <p className="pokemonNotFound">Pokemon not found</p>
    const {name, id, image, number} = pokemon.pokemon;
    
    return (
        <div key={id} className="pokemonContainer">
            <h1 className="pokemonName">{name}</h1>
            <img className="pokemonImg" src={image} />
            <p className="pokemonNumber">{number}</p>
        </div>
    )
}

export default Pokemon;