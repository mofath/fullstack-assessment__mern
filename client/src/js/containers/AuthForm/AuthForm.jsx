import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { LoginForm, SignupForm } from '../../components';
import AuthFormToggler from './Toggler';
import './auth-form.scss';

export default function AuthForm({ login, signup }) {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const togglerRef = useRef(null);

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <div className='auth-from-wrapper'>
      {isLoginActive ? (
        <LoginForm submit={login} />
      ) : (
        <SignupForm submit={signup} />
      )}
      <AuthFormToggler
        current={isLoginActive ? 'signin' : 'signup'}
        ref={togglerRef}
        onClick={toggleForm}
      />
    </div>
  );
}

AuthForm.propTypes = {
  login: PropTypes.func,
  signup: PropTypes.func,
};
