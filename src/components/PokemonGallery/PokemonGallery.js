import React from 'react';
import Pokemon from '../Pokemon/Pokemon'
import './PokemonGallery.css';

const PokemonGallery = (props) => {
    return (
        <div className='allPokemonContainer'>
            {props.pokemon.map(pokemon => 
                <Pokemon pokemon={pokemon} />
            )}
        </div>
    )
}

export default PokemonGallery;