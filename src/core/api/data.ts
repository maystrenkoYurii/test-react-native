import type { AxiosPromise } from 'axios';

import { axios } from '@core/api';
import { templates } from '@core/constants/templates';

import type { UsersState } from '@flux/bus/data/reducer';

export interface UsersParams {
  userId?: number;
  count?: number;
}

export const users = <T extends UsersState>(params: UsersParams): AxiosPromise<T> => {
  const { count = 20, userId = 0 } = params;

  return axios<T>(templates.usersLink({ count, userId }));
};
