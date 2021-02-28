import React, { Fragment, memo } from 'react';

import type { FunctionComponent } from 'react';

//import { ListItem } from '@presentational/Common/ListItem';

import type { ItemProps } from '@presentational/UserList';

const UserItem: FunctionComponent<ItemProps> = (props) => {
  const { onPress, index, indexLast, item, ...other } = props;
  //const { domain, title, favicon, negative, timestamp } = item;

  const isFirstItem = index === 0;

  const isLastItem = index === indexLast;

  // return (
  //   <ListItem
  //     {...other}
  //     title={domain}
  //     message={title}
  //     borderTop={isFirstItem}
  //     borderBottom={{ padding: !isLastItem }}
  //     onPress={onPress}
  //   >
  //     <Fragment />
  //   </ListItem>
  // );

  return <Fragment />;
};

export default memo(UserItem);
