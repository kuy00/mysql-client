let _token: string | null = null;

export const setTokenInMemory = (token: string | null) => {
  _token = token;
};

export const getTokenInMemory = () => _token;
