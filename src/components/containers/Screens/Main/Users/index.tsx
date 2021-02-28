import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { FunctionComponent } from 'react';

import UsersComponent from '@presentational/Screens/Main/Users';

import { useInteractionEffect } from '@hooks/common';
import { callFetchUsers } from '@flux/bus/data/saga/asyncActions';
import { getUsersFetching, getUsersPageFetching, getUsersUpdateFetching } from '@selectors/ui';
import { getUsers } from '@selectors/data';

import { constants } from '@core/constants';

const Users: FunctionComponent = () => {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);

  const loading = useSelector(getUsersFetching);

  const loadingPage = useSelector(getUsersPageFetching);

  const loadingUpdate = useSelector(getUsersUpdateFetching);

  const fetchUsers = useCallback(() => {
    dispatch(callFetchUsers({ count: constants.PAGINATION_COUNT }));
  }, [dispatch]);

  useInteractionEffect(fetchUsers);

  return (
    <UsersComponent
      data={users}
      loading={loading}
      loadingPage={loadingPage}
      loadingUpdate={loadingUpdate}
      onPressItem={(item) => console.log('onPressItem', item)}
      onLoadNextPage={() => console.log('onLoadNextPage')}
      onUpdateList={() => console.log('onUpdateList')}
    />
  );
};

export default Users;
