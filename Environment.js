const ENV = {
  dev: {
    apiUrl: 'http://192.168.1.117:8080/api',
    oAuthConfig: {
      issuer: 'https://localhost:5001/api',
      clientId: 'deneme_App',
      clientSecret: '1q2w3e*',
      scope: 'offline_access deneme',
    },
    localization: {
      defaultResourceName: 'deneme',
    },
  },
  prod: {
    apiUrl: 'http://192.168.1.117:8080/api',
    oAuthConfig: {
      issuer: 'https://localhost:5001/api',
      clientId: 'deneme_App',
      clientSecret: '1q2w3e*',
      scope: 'offline_access deneme',
    },
    localization: {
      defaultResourceName: 'deneme',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
