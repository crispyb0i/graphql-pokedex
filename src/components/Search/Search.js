import React from 'react';
import './Search.css';
import { useLazyQuery, gql, client } from '@apollo/client';
import Pokemon from '../Pokemon/Pokemon';


const Search = ({searchInput, input}) => {

    const GET_POKEMON = gql`
        query($name: String!) {
            pokemon(name: $name) {
                id
                number
                name
                image
            }
        }
    `

    const [getPokemon, {loading, error, data}] = useLazyQuery(GET_POKEMON, { variables: {name: input}});

    if(loading) <p>loading...</p>
    if(error) console.log(error)

    const handleClick = (string) => {
        getPokemon(string);
    }

    console.log(data)

    return (
        <div className="searchContainer">
            <form className="searchInput">
                <label for="pokemon">Search Pokemon:</label>
                <input type='text' name='pokemon' value={input} onChange={searchInput}/>
                <button onClick={()=>handleClick(input)} type='button'>SUBMIT</button>
            </form>
            <div className="searchResult">
                {data &&
                    <Pokemon pokemon={data.pokemon} />
                }
            </div>
            
        </div>
        
    )
}

export default Search;