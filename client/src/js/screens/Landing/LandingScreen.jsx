import React from 'react';
import { useHistory } from 'react-router';
import { AuthForm } from '../../containers';
import services from '../../../services';
import './landing-screen.scss';

const LandingScreen = () => {
  const history = useHistory();

  const signup = async (signupData) => {
    try {
      const { success, error } = await services().authService.signup(
        signupData
      );
      if (error) alert(error.message);
      if (success) alert('Account created successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async (loginData) => {
    try {
      const { error, isAuthenticated, user } =
        await services().authService.login(loginData);
      if (error) alert(error.message);
      if (isAuthenticated) {
        history.replace('/home');
        alert(`Welcome, ${user.username}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='landing-screen'>
      <AuthForm signup={signup} login={login} />
    </div>
  );
};

export default LandingScreen;
