import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './button-icon.scss';

export default function ButtonIcon({ onClick, iconName, className = '' }) {
  return (
    <button
      className={`
        button-icon
        ${className}
      `}
      onClick={onClick}
    >
      <Icon name={iconName} />
    </button>
  );
}

ButtonIcon.propTypes = {
  onClick: PropTypes.func,
  iconName: PropTypes.string,
  className: PropTypes.string,
};
