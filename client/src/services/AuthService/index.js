import config from '../../config';

const AuthService = (httpClient) => {
  const signup = async (signupData) => {
    const { data } = await httpClient.post(
      `${config.baseUrl}/auth/signup`,
      signupData
    );
    return data;
  };

  const login = async (loginData) => {
    const { data } = await httpClient.post(
      `${config.baseUrl}/auth/login`,
      loginData
    );
    return data;
  };

  return Object.freeze({
    signup,
    login,
  });
};

export default AuthService;
