import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Category from '../containers/Category';
import AllCategories from '../containers/AllCategories';
import Layout from '../layouts/layout';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CATEGORIES } from '../graphql';

const AppRouter = () => {
  const { loading, error, data } = useQuery(ALL_CATEGORIES);
  error && console.error('error', error);
  return loading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <Layout categories={data.allCategories}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/category/:name' component={Category} />
          <Route exact path='/categories' component={AllCategories} />
        </Switch>
      </Layout>
    </div>
  );
};
export default AppRouter;
