import axiosBase from 'axios';

import type { AxiosPromise, AxiosRequestConfig } from 'axios';

import { getApiHost } from '@functions/common';

import type { UnknownObject } from '@typings/utils';

export const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
} as const;

export const createAxios = (host: string) => {
  return <T = UnknownObject>(uri: string, config: AxiosRequestConfig = {}): AxiosPromise<T> => {
    return axiosBase({
      url: host + uri,
      method: METHODS.GET,
      headers: config.headers,
      ...config,
    });
  };
};

export const axios = createAxios(getApiHost());
