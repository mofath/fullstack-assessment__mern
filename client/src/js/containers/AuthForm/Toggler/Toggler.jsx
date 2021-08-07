import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './toggler.scss';

const AuthFormToggler = forwardRef(({ current, onClick }, ref) => {
  return (
    <div ref={ref} className='auth-form-toggler__wrapper'>
      {current === 'signin'
        ? "Dont't have an account?"
        : 'Already, have an account?'}
      <span onClick={onClick} className='auth-form-toggler'>
        &nbsp;
        {current === 'signin' ? 'Sign Up' : 'Sign In'}
      </span>
    </div>
  );
});

AuthFormToggler.propTypes = {
  current: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

AuthFormToggler.displayName = 'AuthFormToggler';

export default AuthFormToggler;
