import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Footer } from '../../components';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <BrowserRouter>
      <Header />
      <main className='screen-wrapper'>
        <div className='screen'>
          <Switch>{children}</Switch>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
