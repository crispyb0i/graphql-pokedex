import gql from '@apollo/client';

const GET_ALL_POKEMON = gql`
    query {
        pokemons(first: 150) {
            id
            number
            name
            image
        }
    }
`

export const GET_POKEMON = gql`
    query(name: $name) {
        pokemons(name: $name) {
            id
            number
            name
            image
        }
    }
`