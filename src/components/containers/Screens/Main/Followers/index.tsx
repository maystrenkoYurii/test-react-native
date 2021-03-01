import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { FunctionComponent } from 'react';

import FollowersComponent from '@presentational/Screens/Main/Followers';

import { useInteractionEffect } from '@hooks/common';
import { callFetchFollowers, callFetchFollowersPage } from '@flux/bus/data/saga/asyncActions';
import { getFollowersFetching, getFollowersPageFetching, getFollowersUpdateFetching } from '@selectors/ui';
import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';
import { getFollowers } from '@selectors/data';
import { constants } from '@core/constants';

import type { FollowersScreenProps } from '@typings/navigation';
import type { User } from '@flux/bus/data/reducer';

const Followers: FunctionComponent<FollowersScreenProps> = (props) => {
  const { navigation, route } = props;
  const { params } = route;
  const { user } = params;

  const dispatch = useDispatch();

  const followers = useSelector(getFollowers)[user.login];

  const loading = useSelector(getFollowersFetching);

  const loadingPage = useSelector(getFollowersPageFetching);

  const loadingUpdate = useSelector(getFollowersUpdateFetching);

  const handleLoadFollowers = useCallback(() => dispatch(callFetchFollowers({ login: user.login })), [dispatch, user]);

  const handleLoadNextPage = useCallback(() => {
    const nextPage = Math.ceil(followers.length / constants.PAGINATION_COUNT) + 1 || 1;

    followers.length &&
      dispatch(
        callFetchFollowersPage({ fetching: asyncTypes.CALL_FETCH_FOLLOWERS_PAGE, login: user.login, page: nextPage })
      );
  }, [dispatch, followers, user]);

  const handleUpdateList = useCallback(() => {
    dispatch(callFetchFollowers({ fetching: asyncTypes.CALL_FETCH_FOLLOWERS_UPDATE, login: user.login }));
  }, [dispatch, user]);

  const handlePressItem = useCallback(
    (item: User) => {
      navigation.push(constants.SCREEN_FOLLOWERS, { user: item });
    },
    [navigation]
  );

  useEffect(() => {
    navigation.setOptions({ headerTitle: user.login });
  }, [user, navigation]);

  useInteractionEffect(handleLoadFollowers);

  return (
    <FollowersComponent
      data={followers}
      loading={loading}
      loadingPage={loadingPage}
      loadingUpdate={loadingUpdate}
      onPressItem={handlePressItem}
      onLoadNextPage={handleLoadNextPage}
      onUpdateList={handleUpdateList}
    />
  );
};

export default Followers;
