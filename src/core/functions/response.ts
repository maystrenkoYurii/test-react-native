import type { AxiosError, AxiosResponse } from 'axios';

import { emitErrorMessage } from '@functions/messages';

export const throwResponseError = (response: AxiosResponse): never | void => {
  const { status, statusText } = response;

  if (status !== 200 && status !== 201) {
    throw new Error(statusText);
  }
};

export const emitResponseErrorMessage = (error: AxiosError): void => {
  const { message, response } = error;

  const networkMessage = message.toLocaleLowerCase().includes('network') ? 'Network error' : undefined;

  console.error('Error message: ', message);

  response && console.error('Error response: ', response);

  emitErrorMessage(response?.data.error || response?.data.message || networkMessage || message);
};
