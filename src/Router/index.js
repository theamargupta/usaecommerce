import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Category from '../containers/Category';
import AllCategories from '../containers/AllCategories';
import Layout from '../layouts/layout';

const AppRouter = () => {
  return (
    <div>
      <Layout>
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
