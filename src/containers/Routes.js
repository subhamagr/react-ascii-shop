import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Layout/Layout';

import ProductListingPage from '../pages/ProductListing/ProductListingPage';

export default () => (
  <div>
    <Layout
      renderRoutes={() => (
        <Switch>
          <Route exact path="/" component={ProductListingPage} />
        </Switch>
      )}
    />
  </div>
);
