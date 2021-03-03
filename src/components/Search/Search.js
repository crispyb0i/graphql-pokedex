import React from 'react';
import './Search.css';
import { useQuery, gql } from '@apollo/client';


const Search = ({searchInput, input}) => {
    const GET_POKEMON = gql`
        query($name: name) {
            pokemons(name: $name) {
                id
                number
                name
                image
            }
        }
    `

    const {loading, error, data} = useQuery(GET_POKEMON, { variables: {name: input}});

    console.log(data)

    return (
        <form className="searchInput">
            <label for="pokemon">Search Pokemon:</label>
            <input type='text' name='pokemon' value={input} onChange={searchInput}/>
            <button type='button'>SUBMIT</button>
        </form>
    )
}

export default Search;