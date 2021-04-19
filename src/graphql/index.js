import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  {
    allPosts {
      id
      body
      title
      status
    }
  }
`;
