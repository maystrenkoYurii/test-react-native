import { useTheme } from '@react-navigation/native';

import { CustomLightTheme, CustomDarkTheme } from '@assets/themes';

import type { CustomTheme } from '@assets/themes';

export const useCustomTheme = (): CustomTheme => {
  return useTheme().dark ? CustomDarkTheme : CustomLightTheme;
};
