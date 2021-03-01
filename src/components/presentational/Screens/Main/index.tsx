import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import type { FunctionComponent } from 'react';

import UsersScreen from '@containers/Screens/Main/Users';
import FollowersScreen from '@containers/Screens/Main/Followers';

import { getNavigatorOptions } from '@components/navigation';
import { useCustomTheme } from '@hooks/theme';
import { constants } from '@core/constants';

import type { MainStackParams } from '@typings/navigation';

const MainStack = createStackNavigator<MainStackParams>();

const Main: FunctionComponent = () => {
  const theme = useCustomTheme();

  const insets = useSafeAreaInsets();

  return (
    <MainStack.Navigator headerMode="screen" screenOptions={getNavigatorOptions(theme, insets)}>
      <MainStack.Screen
        component={UsersScreen}
        name={constants.SCREEN_USERS}
        options={{
          headerTitle: 'Users',
        }}
      />

      <MainStack.Screen
        component={FollowersScreen}
        name={constants.SCREEN_FOLLOWERS}
        options={{
          headerTitle: 'Followers',
        }}
      />
    </MainStack.Navigator>
  );
};

export default Main;
