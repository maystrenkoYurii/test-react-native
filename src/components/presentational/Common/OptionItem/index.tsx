import React, { Fragment, memo } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import type { FunctionComponent, PropsWithChildren, ReactNode } from 'react';
import type { TouchableHighlightProps, ViewStyle, TextStyle } from 'react-native';

import NextStepIcon from '@presentational/Common/Svg/Icons/NextStepIcon';

import { Border } from '@presentational/Common/Border';

import { useCustomTheme } from '@hooks/theme';
import { variables } from '@assets/variables';

import type { Nullable } from '@typings/utils';

const Touchable = Animated.createAnimatedComponent(TouchableHighlight);

type BorderType = boolean | { padding: boolean };

export interface Props extends Animated.AnimateProps<ViewStyle, TouchableHighlightProps> {
  contentStyle?: Animated.AnimateStyle<ViewStyle>;
  containerStyle?: Animated.AnimateStyle<ViewStyle>;
  messageStyle?: TextStyle;
  backgroundColor?: string;
  title?: Nullable<string>;
  borderTop?: BorderType;
  borderBottom?: BorderType;
  rightContent?: ReactNode;
  minHeight?: number;
  nextStep?: boolean;
}

export const OptionItem: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const {
    style,
    children,
    contentStyle,
    containerStyle,
    messageStyle,
    backgroundColor,
    title,
    borderTop,
    borderBottom = { padding: true },
    rightContent,
    minHeight = variables.optionHeight,
    nextStep,
    ...other
  } = props;

  const { colors } = useCustomTheme();

  const borderTopColor = borderTop ? colors.border : 'transparent';

  const borderBottomColor = borderBottom ? colors.border : 'transparent';

  const borderTopPadding = typeof borderTop === 'object' && borderTop.padding;

  const borderBottomPadding = typeof borderBottom === 'object' && borderBottom.padding;

  return (
    <Animated.View style={style}>
      <Touchable
        {...other}
        style={[{ backgroundColor: backgroundColor || colors.card }, containerStyle]}
        underlayColor={colors.optionActive}
        activeOpacity={1}
      >
        <Fragment>
          <Border color={borderTopColor} indent={borderTopPadding} />
          <Content style={[{ minHeight }, contentStyle]}>
            {children}
            <TitleText style={[{ color: colors.primaryText }, messageStyle]} numberOfLines={1}>
              {title}
            </TitleText>
            <RightContent>
              {rightContent}
              {nextStep && <NextStep color={colors.secondaryText} />}
            </RightContent>
          </Content>
          <Border color={borderBottomColor} indent={borderBottomPadding} />
        </Fragment>
      </Touchable>
    </Animated.View>
  );
};

const Content = styled(Animated.View)`
  margin-top: ${-StyleSheet.hairlineWidth}px;
  margin-bottom: ${-StyleSheet.hairlineWidth}px;
  padding: 4px 16px 4px 16px;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
`;

const TitleText = styled.Text`
  line-height: 16px;
  font-size: 14px;
  flex-shrink: 1;
`;

const RightContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

const NextStep = styled(NextStepIcon)`
  margin-right: -3px;
  margin-left: 8px;
`;

export default memo(OptionItem);
