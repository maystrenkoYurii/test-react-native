import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import type { FunctionComponent } from 'react';
import type { ViewStyle, KeyboardAvoidingViewProps } from 'react-native';

const behavior = Platform.select({ android: undefined, ios: 'padding' } as const);

const AnimatedKeyboardAvoiding = Animated.createAnimatedComponent(KeyboardAvoidingView);

const KeyboardAvoiding: FunctionComponent<Animated.AnimateProps<ViewStyle, KeyboardAvoidingViewProps>> = (props) => {
  const { children, ...other } = props;

  return (
    <KeyboardAvoidingStyled {...other} behavior={behavior}>
      {children}
    </KeyboardAvoidingStyled>
  );
};

const KeyboardAvoidingStyled = styled(AnimatedKeyboardAvoiding)`
  flex-shrink: 1;
  flex-grow: 1;
`;

export default KeyboardAvoiding;
