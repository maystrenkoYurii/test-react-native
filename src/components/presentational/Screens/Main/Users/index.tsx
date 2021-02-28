import React from 'react';

import type { FunctionComponent } from 'react';

import ScreenLayout from '@presentational/Navigation/ScreenLayout';
import UserList from '@presentational/UserList';

import type { Props as UserListProps } from '@presentational/UserList';
import type { User } from '@flux/bus/data/reducer';

interface Props {
  users?: User[];
}

const Users: FunctionComponent<Props & UserListProps> = (props) => {
  const { users, ...other } = props;

  console.log('Users ', users);

  return (
    <ScreenLayout>
      <UserList {...other} data={users} />
    </ScreenLayout>
  );
};

export default Users;
