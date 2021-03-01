import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { FunctionComponent } from 'react';

import UsersComponent from '@presentational/Screens/Main/Users';

import { useInteractionEffect } from '@hooks/common';
import { callFetchUsers } from '@flux/bus/data/saga/asyncActions';
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

  // const handleLoadNextPage = useCallback(() => {
  //   users.length && dispatch(callFetchUsers({ fetching: asyncTypes.CALL_FETCH_USERS_PAGE, userId: users[users.length - 1] }));
  // }, [dispatch, users]);

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
      onLoadNextPage={() => console.log('onLoadNextPage')}
      onUpdateList={handleUpdateList}
    />
  );
};

export default Users;
