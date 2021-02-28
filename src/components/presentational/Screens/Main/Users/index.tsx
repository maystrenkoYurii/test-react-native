import React, { Fragment } from 'react';

import type { FunctionComponent } from 'react';

import ScreenLayout from '@presentational/Navigation/ScreenLayout';

import type { User } from '@flux/bus/data/reducer';

interface Props {
  users?: User[];
}

const Users: FunctionComponent<Props> = (props) => {
  const { users } = props;

  console.log('Users ', users);

  return (
    <ScreenLayout>
      <Fragment />
    </ScreenLayout>
  );
};

export default Users;
