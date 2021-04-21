import React, { Suspense } from 'react';
import { InMemoryCache, ApolloClient } from '@apollo/client';
import AppRoute from './Router';
import Loader from './components/Loader';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';

const App = () => {
  const client = new ApolloClient({
    // uri: 'https://amarsblog.herokuapp.com/admin/api',
    uri: 'http://localhost:5000/admin/api',
    cache: new InMemoryCache(),
    credentials: 'include',
  });
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<Loader />}>
        <AppRoute />
      </Suspense>
    </ApolloProvider>
  );
};

export default App;