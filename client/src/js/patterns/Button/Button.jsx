import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, className, onClick, children, type, ...props }) => {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
