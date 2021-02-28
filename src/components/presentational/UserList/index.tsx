import React, { forwardRef, useMemo, memo } from 'react';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';

import type { ElementType } from 'react';

import UserItem from '@presentational/UserItem';
import RefreshControl from '@presentational/Common/RefreshControl';
import ListFooter from '@presentational/Common/ListFooter';
//import StubList from '@presentational/StubList';

import { keyExtractor } from '@functions/data';

import type { FlatListProps } from '@typings/common';
import type { Callback, Nullable } from '@typings/utils';
import type { User } from '@flux/bus/data/reducer';

import { variables } from '@assets/variables';

export type PressListItem = (item: User) => void;

type ListProps = FlatListProps<User>;

export interface ItemProps {
  onPress?: PressListItem;
  indexLast?: number;
  index?: number;
  item: User;
}

export interface Props {
  data?: Nullable<User[]>;
  componentItem?: ElementType<ItemProps>;
  onPressItem: PressListItem;
  onLoadNextPage?: Callback;
  onUpdateList: Callback;
  loadingUpdate: boolean;
  loadingPage?: boolean;
  itemHeight?: number;
  loading: boolean;
}

const UserList = forwardRef<FlatList, Props & ListProps>((props, forwardedRef) => {
  const {
    contentContainerStyle,
    componentItem: ComponentItem = UserItem,
    onLoadNextPage,
    onUpdateList,
    onPressItem,
    itemHeight = variables.listItemHeight,
    loadingUpdate,
    loadingPage,
    loading,
    data,
    ...other
  } = props;

  const frame = useSafeAreaFrame();

  const indexLast = useMemo(() => Number(data?.length) - 1, [data]);

  const visibleFooter = useMemo(() => Boolean(data?.length), [data]);

  const initialCountRender = useMemo(() => Math.round(frame.height / itemHeight), [frame, itemHeight]);

  return (
    <FlatList
      {...other}
      data={data}
      extraData={data}
      ref={forwardedRef}
      keyExtractor={keyExtractor}
      onEndReached={onLoadNextPage}
      initialNumToRender={initialCountRender}
      contentContainerStyle={contentContainerStyle}
      refreshControl={<RefreshControl refreshing={loadingUpdate} onRefresh={onUpdateList} />}
      ListFooterComponent={<ListFooter visible={visibleFooter} loading={loadingPage} />}
      //ListEmptyComponent={<StubList loading={loading || loadingUpdate} />}
      keyboardShouldPersistTaps="handled"
      getItemLayout={(data, index) => {
        return {
          length: itemHeight,
          offset: itemHeight * index,
          index,
        };
      }}
      renderItem={({ item, index }) => {
        return <ComponentItem item={item} index={index} indexLast={indexLast} onPress={onPressItem} />;
      }}
    />
  );
});

UserList.displayName = 'UserList';

export default memo(UserList);
