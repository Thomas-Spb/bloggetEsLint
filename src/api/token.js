export const setToken = token => {
  sessionStorage.setItem('bearer', token);
};

export const getToken = () => {
  let token = '';
  if (location.pathname.includes('/auth')) {
    token = new URLSearchParams(location.hash.substring(1)).get('access_token');
    setToken(token);
  }
  if (sessionStorage.getItem('bearer')) {
    token = sessionStorage.getItem('bearer');
  }

  return token;
};
