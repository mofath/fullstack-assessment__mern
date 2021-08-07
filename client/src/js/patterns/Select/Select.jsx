import React from 'react';
import PropTypes from 'prop-types';
import './select.scss';

export default function Select({
  name,
  selected,
  children,
  options,
  onChange,
  className = '',
  ...props
}) {
  return (
    <div className={`select ${className}`} {...props}>
      <select value={selected} onChange={onChange} className='select__field'>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  selected: PropTypes.string,
  children: PropTypes.node,
  options: PropTypes.array,
  className: PropTypes.string,
};
