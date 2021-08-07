import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../Layout';
import { HomeScreen, LandingScreen } from '../../screens';

const App = () => {
  return (
    <Layout>
      <Route path='/home'>
        <HomeScreen />
      </Route>
      <Route path='/'>
        <LandingScreen />
      </Route>
    </Layout>
  );
};

export default App;
