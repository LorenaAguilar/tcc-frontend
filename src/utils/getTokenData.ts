interface TokenData {
  name: string;
  lastname: string;
}

const getTokenData = (token: string): TokenData => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return { name: '', lastname: '' };
  }
};

export default getTokenData;
