import HttpClient from './HttpClient';
import AuthService from './AuthService';

const initAuthService = () => {
  const httpClient = HttpClient();
  return AuthService(httpClient);
};

const configureServices = () => {
  const authService = initAuthService();

  return {
    authService,
  };
};

export default configureServices;
