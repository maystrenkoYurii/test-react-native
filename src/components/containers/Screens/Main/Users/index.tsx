import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import type { FunctionComponent } from 'react';

import UsersComponent from '@presentational/Screens/Main/Users';

import { callFetchUsers } from '@flux/bus/data/saga/asyncActions';
import { useInteractionEffect } from '@hooks/common';

const Users: FunctionComponent = () => {
  const dispatch = useDispatch();

  const callback = useCallback(() => dispatch(callFetchUsers({ count: 20, userId: 0 })), [dispatch]);

  useInteractionEffect(callback);

  return <UsersComponent />;
};

export default Users;
