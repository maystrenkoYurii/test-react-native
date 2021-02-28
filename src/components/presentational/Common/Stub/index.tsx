import React, { memo } from 'react';
import styled from 'styled-components/native';

import type { FunctionComponent, ElementType } from 'react';
import type { ViewProps } from 'react-native';

import ListIcon from '@presentational/Common/Svg/Icons/ListIcon';

import { useCustomTheme } from '@hooks/theme';

import type { IconProps } from '@typings/core';

export interface Props extends ViewProps {
  icon?: ElementType<IconProps>;
  message: string;
}

export const Stub: FunctionComponent<Props> = (props) => {
  const { message, icon: Icon = ListIcon, ...other } = props;

  const { colors } = useCustomTheme();

  return (
    <Wrapper {...other}>
      <Circle style={{ backgroundColor: colors.lightCard }}>
        <Icon color={colors.lightGrey} size={80} />
      </Circle>
      <Message style={{ color: colors.lightGrey }}>{message}</Message>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px;
  flex-grow: 1;
`;

const Circle = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 90px;
  height: 180px;
  width: 180px;
`;

const Message = styled.Text`
  font-weight: bold;
  margin-top: 16px;
  font-size: 18px;
`;

export default memo(Stub);
