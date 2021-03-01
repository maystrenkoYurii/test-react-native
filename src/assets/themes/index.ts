import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const colors = {
  white: 'rgb(255, 255, 255)',
  primary: 'rgb(14, 214, 220)',
  lightGrey: 'rgba(190, 190, 190, 0.6)',
  success: 'rgb(52, 199, 89)',
  warning: 'rgb(255, 193, 7)',
  error: 'rgb(244, 67, 54)',
  info: 'rgb(14, 214, 220)',
};

export const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primaryText: 'rgb(60, 60, 67)',
    secondaryText: 'rgba(60, 60, 67, 0.4)',
    optionActive: 'rgba(235, 235, 245, 0.9)',
    background: 'rgb(241, 245, 248)',
    border: 'rgba(72, 95, 97, 0.25)',
    lightCard: 'rgba(249, 249, 249, 0.5)',
    card: 'rgb(249, 249, 249)',
    ...colors,
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primaryText: 'rgb(255, 255, 255)',
    secondaryText: 'rgba(255, 255, 255, 0.5)',
    optionActive: 'rgba(255, 255, 255, 0.1)',
    background: 'rgb(59, 72, 73)',
    border: 'rgba(255, 255, 255, 0.20)',
    lightCard: 'rgba(67, 76, 84, 0.5)',
    card: 'rgb(67, 76, 84)',
    ...colors,
  },
};

export type CustomTheme = typeof CustomLightTheme | typeof CustomDarkTheme;
