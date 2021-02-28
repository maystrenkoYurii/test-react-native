import React from 'react';
import { useColorScheme } from 'react-native-appearance';

import type { FunctionComponent } from 'react';

import ScreensComponent from '@presentational/Screens';

import { CustomLightTheme, CustomDarkTheme } from '@assets/themes';
import { constants } from '@core/constants';

const Screens: FunctionComponent = () => {
  const colorScheme = useColorScheme();

  const theme = colorScheme === constants.COLOR_SCHEME.DARK ? CustomDarkTheme : CustomLightTheme;

  return <ScreensComponent theme={theme} />;
};

export default Screens;
