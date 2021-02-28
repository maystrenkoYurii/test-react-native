import React, { memo } from 'react';
import styled from 'styled-components/native';

import type { FunctionComponent, PropsWithChildren } from 'react';

import { OptionItem } from '@presentational/Common/OptionItem';

import { useCustomTheme } from '@hooks/theme';
import { variables } from '@assets/variables';

import type { Props as OptionItemProps } from '@presentational/Common/OptionItem';
import type { Nullable } from '@typings/utils';

interface Props extends OptionItemProps {
  message?: Nullable<string>;
  title?: Nullable<string>;
}

export const ListItem: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const { children, backgroundColor, title, message, ...other } = props;

  const { colors } = useCustomTheme();

  return (
    <Container {...other} backgroundColor={backgroundColor || colors.lightCard} minHeight={variables.listItemHeight}>
      {children}
      <Content>
        <Title style={{ color: colors.primaryText }} numberOfLines={1}>
          {title}
        </Title>
        <Message style={{ color: colors.secondaryText }} numberOfLines={2}>
          {message}
        </Message>
      </Content>
    </Container>
  );
};

const Container = styled(OptionItem).attrs<OptionItemProps>(({ contentStyle }) => {
  return {
    contentStyle: [
      {
        paddingBottom: 15,
        paddingTop: 15,
      },
      contentStyle,
    ],
  };
})``;

const Content = styled.View`
  flex-shrink: 1;
  flex-grow: 1;
`;

const Title = styled.Text`
  font-weight: bold;
  line-height: 18px;
  font-size: 18px;
  flex-shrink: 1;
`;

const Message = styled.Text`
  margin-top: 10px;
  font-weight: normal;
  line-height: 14px;
  font-size: 14px;
`;

export default memo(ListItem);
