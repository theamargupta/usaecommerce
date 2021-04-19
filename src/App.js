import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonsContainer } from './containers';
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: 'https://amarsblog.herokuapp.com/admin/api',
  });

  return (
    <ApolloProvider client={client}>
      <PokemonsContainer />
    </ApolloProvider>
  );
}

export default App;
