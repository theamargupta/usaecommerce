import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql';
// import { Pokemon } from '../components';

export function PokemonsContainer() {
  const data = useQuery(GET_POKEMONS);
  data.data && console.log(data.data.allPosts);
  return (
    <div className='container'>
      {/* {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))} */}
    </div>
  );
}
