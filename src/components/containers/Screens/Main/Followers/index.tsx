import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { FunctionComponent } from 'react';

import FollowersComponent from '@presentational/Screens/Main/Followers';

import { useInteractionEffect } from '@hooks/common';
import { callFetchFollowers } from '@flux/bus/data/saga/asyncActions';

import type { FollowersScreenProps } from '@typings/navigation';

const Followers: FunctionComponent<FollowersScreenProps> = (props) => {
  const { navigation, route } = props;
  const { params } = route;
  const { user } = params;

  const dispatch = useDispatch();

  const handleLoadFollowers = useCallback(() => dispatch(callFetchFollowers({ login: user.login })), [dispatch, user]);

  useEffect(() => {
    navigation.setOptions({ headerTitle: user.login });
  }, [user, navigation]);

  useInteractionEffect(handleLoadFollowers);

  return <FollowersComponent />;
};

export default Followers;
