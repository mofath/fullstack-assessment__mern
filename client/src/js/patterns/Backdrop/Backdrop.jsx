import React from 'react';
import PropTypes from 'prop-types';
import './backdrop.scss';

const Backdrop = ({ onClick, show, children }) => {
  return show ? (
    <div className='backdrop' onClick={onClick}>
      {children}
    </div>
  ) : null;
};

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Backdrop;
