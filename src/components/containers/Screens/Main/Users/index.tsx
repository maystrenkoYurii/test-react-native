import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { FunctionComponent } from 'react';

import UsersComponent from '@presentational/Screens/Main/Users';

import { useInteractionEffect } from '@hooks/common';
import { callFetchUsers, callFetchUsersPage } from '@flux/bus/data/saga/asyncActions';
import { getUsersFetching, getUsersPageFetching, getUsersUpdateFetching } from '@selectors/ui';
import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';
import { constants } from '@core/constants';
import { getUsers } from '@selectors/data';

import type { UsersScreenProps } from '@typings/navigation';
import type { User } from '@flux/bus/data/reducer';

const Users: FunctionComponent<UsersScreenProps> = (props) => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const users = useSelector(getUsers);

  const loading = useSelector(getUsersFetching);

  const loadingPage = useSelector(getUsersPageFetching);

  const loadingUpdate = useSelector(getUsersUpdateFetching);

  const handleLoadUsers = useCallback(() => dispatch(callFetchUsers()), [dispatch]);

  const handleLoadNextPage = useCallback(() => {
    users.length &&
      dispatch(callFetchUsersPage({ fetching: asyncTypes.CALL_FETCH_USERS_PAGE, userId: users[users.length - 1]?.id }));
  }, [dispatch, users]);

  const handleUpdateList = useCallback(() => {
    dispatch(callFetchUsers({ fetching: asyncTypes.CALL_FETCH_USERS_UPDATE }));
  }, [dispatch]);

  const handlePressItem = useCallback(
    (item: User) => {
      navigation.push(constants.SCREEN_FOLLOWERS, { user: item });
    },
    [navigation]
  );

  useInteractionEffect(handleLoadUsers);

  return (
    <UsersComponent
      data={users}
      loading={loading}
      loadingPage={loadingPage}
      loadingUpdate={loadingUpdate}
      onPressItem={handlePressItem}
      onLoadNextPage={handleLoadNextPage}
      onUpdateList={handleUpdateList}
    />
  );
};

export default Users;
