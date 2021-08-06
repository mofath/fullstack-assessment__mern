import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../Layout';
import { LandingScreen } from '../../screens';

const App = () => {
  return (
    <Layout>
      <Route path='/'>
        <LandingScreen />
      </Route>
    </Layout>
  );
};

export default App;
