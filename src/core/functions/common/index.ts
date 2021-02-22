export const getNodeEnv = (): string => {
  return process.env.NODE_ENV || 'development';
};

export const isDevelopment = (): boolean => {
  return getNodeEnv() === 'development';
};
