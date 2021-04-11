import './App.css';
import { useState } from 'react';
import Search from './components/Search/Search';
import PokemonGallery from './components/PokemonGallery/PokemonGallery';
import { useQuery, gql } from '@apollo/client'
// import GET_ALL_POKEMON from './graphql/get-pokemon';

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

function App() {

  const [input, setInput] = useState('');
  const {loading, error, data} = useQuery(GET_ALL_POKEMON)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const searchInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <Search searchInput={searchInput} input={input}/>
      <PokemonGallery pokemon={data.pokemons}/>
    </div>
  );
}

export default App;
