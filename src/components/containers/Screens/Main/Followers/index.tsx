import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { FunctionComponent } from 'react';

import FollowersComponent from '@presentational/Screens/Main/Followers';

import { useInteractionEffect } from '@hooks/common';
import { callFetchFollowers } from '@flux/bus/data/saga/asyncActions';
import { getFollowersFetching, getFollowersPageFetching, getFollowersUpdateFetching } from '@selectors/ui';
import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';
import { getFollowers } from '@selectors/data';

import type { FollowersScreenProps } from '@typings/navigation';

const Followers: FunctionComponent<FollowersScreenProps> = (props) => {
  const { navigation, route } = props;
  const { params } = route;
  const { user } = params;

  const dispatch = useDispatch();

  const followers = useSelector(getFollowers);

  const loading = useSelector(getFollowersFetching);

  const loadingPage = useSelector(getFollowersPageFetching);

  const loadingUpdate = useSelector(getFollowersUpdateFetching);

  const handleLoadFollowers = useCallback(() => dispatch(callFetchFollowers({ login: user.login })), [dispatch, user]);

  const handleUpdateList = useCallback(() => {
    dispatch(callFetchFollowers({ fetching: asyncTypes.CALL_FETCH_FOLLOWERS_UPDATE, login: user.login }));
  }, [dispatch, user]);

  useEffect(() => {
    navigation.setOptions({ headerTitle: user.login });
  }, [user, navigation]);

  useInteractionEffect(handleLoadFollowers);

  return (
    <FollowersComponent
      data={followers[user.login]}
      loading={loading}
      loadingPage={loadingPage}
      loadingUpdate={loadingUpdate}
      onPressItem={() => console.log('onPressItem')}
      onLoadNextPage={() => console.log('onLoadNextPage')}
      onUpdateList={handleUpdateList}
    />
  );
};

export default Followers;
