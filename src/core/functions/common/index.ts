import { links } from '@core/constants/links';

export const getApiHost = (): string => {
  return process.env.API_ENV_HOST || links.API_HOST;
};
