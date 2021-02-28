import React, { Fragment } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';
import styled from 'styled-components/native';

import type { FunctionComponent, ReactNode } from 'react';
import type { ViewProps } from 'react-native';

import KeyboardAvoiding from '@presentational/Common/KeyboardAvoiding';
import Message from '@presentational/Common/Message';

interface Props extends ViewProps {
  keyboardOffset?: number;
  header?: ReactNode;
}

const ScreenLayout: FunctionComponent<Props> = (props) => {
  const { children, keyboardOffset = 0, header, ...other } = props;

  const isFocused = useIsFocused();

  const insets = useSafeAreaInsets();

  const headerHeight = useHeaderHeight();

  const keyboardVerticalOffset = headerHeight + keyboardOffset;

  return (
    <Fragment>
      {header}
      <Layout
        {...other}
        style={{
          paddingBottom: insets.bottom,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        }}
      >
        <KeyboardAvoiding keyboardVerticalOffset={keyboardVerticalOffset}>
          {children}
          <Message focused={isFocused} />
        </KeyboardAvoiding>
      </Layout>
    </Fragment>
  );
};

const Layout = styled.View`
  overflow: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;

export default ScreenLayout;
