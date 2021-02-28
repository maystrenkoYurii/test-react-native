import { CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { createRef } from 'react';

import type { NavigationContainerRef } from '@react-navigation/native';
import type { StackNavigationOptions } from '@react-navigation/stack';
import type { EdgeInsets } from 'react-native-safe-area-context';

import { variables } from '@assets/variables';

import type { CustomTheme } from '@assets/themes';

export const navigationRef = createRef<NavigationContainerRef>();

export const getNavigatorOptions = (theme: CustomTheme, insets: EdgeInsets): StackNavigationOptions => {
  return {
    headerTitleAlign: 'center',
    headerTitleStyle: styles.headerTitle,
    headerTintColor: theme.colors.primaryText,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerLeftContainerStyle: styles.headerLeftContainer,
    headerRightContainerStyle: styles.headerRightContainer,
    headerStyle: {
      ...styles.header,
      borderColor: theme.colors.border,
      height: variables.headerHeight + insets.top,
    },
  };
};

export const styles = StyleSheet.create({
  header: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  headerTitle: {
    maxWidth: 240,
    lineHeight: 22,
    fontSize: 18,
  },
  headerLeftContainer: {
    paddingRight: 8,
    paddingLeft: 8,
  },
  headerRightContainer: {
    paddingRight: 8,
    paddingLeft: 8,
  },
});
