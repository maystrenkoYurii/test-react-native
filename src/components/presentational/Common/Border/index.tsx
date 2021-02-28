import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import type { FunctionComponent } from 'react';
import type { ViewProps } from 'react-native';

import { useCustomTheme } from '@hooks/theme';

import type { PropsColor } from '@typings/core';

interface Props extends ViewProps {
  indent?: boolean;
}

export const Border: FunctionComponent<PropsColor & Props> = (props) => {
  const { style, color, indent, ...other } = props;

  const { colors } = useCustomTheme();

  const paddingBorder = indent ? 16 : 0;

  const backgroundColor = color || colors.border;

  return <BorderView {...other} style={[{ backgroundColor, marginLeft: paddingBorder }, style]} />;
};

const BorderView = styled.View`
  height: ${StyleSheet.hairlineWidth}px;
`;

export default memo(Border);
