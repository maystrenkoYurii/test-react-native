import React from 'react';

import type { FunctionComponent } from 'react';

import ScreenLayout from '@presentational/Navigation/ScreenLayout';
import UserList from '@presentational/UserList';

import type { Props as UserListProps } from '@presentational/UserList';

const Followers: FunctionComponent<UserListProps> = (props) => {
  return (
    <ScreenLayout>
      <UserList {...props} />
    </ScreenLayout>
  );
};

export default Followers;
