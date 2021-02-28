import React, { memo } from 'react';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

import type { FunctionComponent } from 'react';

import { ListItem } from '@presentational/Common/ListItem';

import avatarMock from '@assets/images/avatar.png';

import type { ItemProps } from '@presentational/UserList';

const UserItem: FunctionComponent<ItemProps> = (props) => {
  const { onPress, index, indexLast, item, ...other } = props;
  const { login, html_url, avatar_url } = item;

  const isFirstItem = index === 0;

  const isLastItem = index === indexLast;

  const avatar = avatar_url ? { uri: avatar_url } : avatarMock;

  const handlePress = () => onPress?.(item);

  return (
    <ListItem
      {...other}
      title={login}
      message={html_url}
      borderTop={isFirstItem}
      borderBottom={{ padding: !isLastItem }}
      onPress={handlePress}
      nextStep
    >
      <Image source={avatar} />
    </ListItem>
  );
};

const Image = styled(FastImage)`
  border-radius: 30px;
  margin-right: 16px;
  height: 60px;
  width: 60px;
`;

export default memo(UserItem);
