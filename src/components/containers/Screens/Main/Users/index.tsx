import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { FunctionComponent } from 'react';

import UsersComponent from '@presentational/Screens/Main/Users';

import { useInteractionEffect } from '@hooks/common';
import { callFetchUsers, callFetchUsersPage } from '@flux/bus/data/saga/asyncActions';
import { getUsersFetching, getUsersPageFetching, getUsersUpdateFetching } from '@selectors/ui';
import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';
import { getUsers } from '@selectors/data';

const Users: FunctionComponent = () => {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);

  const loading = useSelector(getUsersFetching);

  const loadingPage = useSelector(getUsersPageFetching);

  const loadingUpdate = useSelector(getUsersUpdateFetching);

  const handleInitLoad = useCallback(() => dispatch(callFetchUsers()), [dispatch]);

  const handleLoadNextPage = useCallback(() => {
    const size = users.length;

    size && dispatch(callFetchUsersPage({ fetching: asyncTypes.CALL_FETCH_USERS_PAGE, userId: users[size - 1]?.id }));
  }, [dispatch, users]);

  const handleUpdateList = useCallback(() => {
    dispatch(callFetchUsers({ fetching: asyncTypes.CALL_FETCH_USERS_UPDATE }));
  }, [dispatch]);

  useInteractionEffect(handleInitLoad);

  return (
    <UsersComponent
      data={users}
      loading={loading}
      loadingPage={loadingPage}
      loadingUpdate={loadingUpdate}
      onPressItem={(item) => console.log('onPressItem', item)}
      onLoadNextPage={handleLoadNextPage}
      onUpdateList={handleUpdateList}
    />
  );
};

export default Users;
