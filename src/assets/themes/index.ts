import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const colors = {
  //black: 'rgb(0, 0, 0)',
  //pink: 'rgb(255, 99, 99)',
  //grey: 'rgb(211, 211, 212)',
  white: 'rgb(255, 255, 255)',
  primary: 'rgb(14, 214, 220)',
  //unopened: 'rgba(14, 214, 220, 0.1)',
  //secondary: 'rgb(241, 113, 5)',
  // intermediate: 'rgba(14, 214, 220, 0.4)',
  // lightGrey: 'rgba(190, 190, 190, 0.6)',
  // yellow: 'rgb(253, 202, 64)',
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
    accentText: 'rgba(60, 60, 67, 0.7)',
    optionActive: 'rgba(235, 235, 245, 0.9)',
    // inputBackground: 'rgba(255, 255, 255, 0.5)',
    // inputText: 'rgba(60, 60, 67, 0.3)',
    // silverGrey: 'rgba(118, 118, 128, 0.12)',
    background: 'rgb(241, 245, 248)',
    border: 'rgba(72, 95, 97, 0.25)',
    // lightCard: 'rgba(249, 249, 249, 0.5)',
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
    accentText: 'rgba(255, 255, 255, 0.7)',
    optionActive: 'rgba(255, 255, 255, 0.1)',
    // inputBackground: 'rgba(241, 245, 248, 0.12)',
    // inputText: 'rgba(235, 235, 245, 0.3)',
    // silverGrey: 'rgba(118, 118, 128, 0.24)',
    background: 'rgb(59, 72, 73)',
    border: 'rgba(255, 255, 255, 0.20)',
    // lightCard: 'rgba(67, 76, 84, 0.5)',
    card: 'rgb(67, 76, 84)',
    ...colors,
  },
};

export type CustomTheme = typeof CustomLightTheme | typeof CustomDarkTheme;
