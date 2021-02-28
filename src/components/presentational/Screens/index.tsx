import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

import type { FunctionComponent } from 'react';

import MainScreen from '@presentational/Screens/Main';

import { getNavigatorOptions, navigationRef } from '@components/navigation';
import { constants } from '@core/constants';

import type { RootStackParams } from '@typings/navigation';
import type { CustomTheme } from '@assets/themes';

const RootStack = createStackNavigator<RootStackParams>();

interface Props {
  theme: CustomTheme;
}

const Screens: FunctionComponent<Props> = (props) => {
  const { theme } = props;

  const insets = useSafeAreaInsets();

  return (
    <GestureRootView style={{ backgroundColor: theme.colors.background }}>
      <NavigationContainer ref={navigationRef} theme={theme}>
        <RootStack.Navigator
          mode="modal"
          screenOptions={{
            ...getNavigatorOptions(theme, insets),
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        >
          <RootStack.Screen component={MainScreen} name={constants.SCREEN_MAIN} options={{ headerShown: false }} />
        </RootStack.Navigator>
      </NavigationContainer>
    </GestureRootView>
  );
};

const GestureRootView = styled(GestureHandlerRootView)`
  flex-grow: 1;
`;

export default Screens;
