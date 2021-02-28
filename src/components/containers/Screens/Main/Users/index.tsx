import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { FunctionComponent } from 'react';

import UsersComponent from '@presentational/Screens/Main/Users';

import { callFetchUsers } from '@flux/bus/data/saga/asyncActions';
import { useInteractionEffect } from '@hooks/common';
import { getUsers } from '@selectors/data';

import { constants } from '@core/constants';

const Users: FunctionComponent = () => {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);

  const callback = useCallback(() => {
    dispatch(callFetchUsers({ count: constants.PAGINATION_COUNT }));
  }, [dispatch]);

  useInteractionEffect(callback);

  return <UsersComponent users={users} />;
};

export default Users;
