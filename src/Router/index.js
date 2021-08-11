import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Category from '../containers/Category';
import Product from '../containers/Product';
import AllCategories from '../containers/AllCategories';
import Admin from '../containers/Admin';
import Layout from '../layouts/layout';
import ProtectedRoute from './protectedRoute';
;

const AppRouter = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/category/:name' component={Category} />
          <Route path='/product/:productId' component={Product} />
          <Route path='/categories' component={AllCategories} />
          <ProtectedRoute path='/admin' component={Admin}/>
        </Switch>
      </Layout>
    </div>
  );
};
export default AppRouter;
