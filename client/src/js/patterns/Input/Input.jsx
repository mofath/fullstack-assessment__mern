import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({
  value,
  name,
  placeholder,
  type,
  onChange,
  className,
  ...props
}) => (
  <>
    <input
      type={type}
      value={value}
      name={name}
      className={`input input-${type} ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  </>
);

Input.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Input;
