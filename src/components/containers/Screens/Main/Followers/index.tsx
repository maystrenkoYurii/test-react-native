import React, { useEffect } from 'react';

import type { FunctionComponent } from 'react';

import FollowersComponent from '@presentational/Screens/Main/Followers';

import type { FollowersScreenProps } from '@typings/navigation';

const Followers: FunctionComponent<FollowersScreenProps> = (props) => {
  const { navigation, route } = props;
  const { params } = route;
  const { user } = params;

  useEffect(() => {
    navigation.setOptions({ headerTitle: user.login });
  }, [user, navigation]);

  console.log('User', params.user);

  return <FollowersComponent />;
};

export default Followers;
