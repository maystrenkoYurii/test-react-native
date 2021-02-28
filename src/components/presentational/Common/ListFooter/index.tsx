import React, { Fragment, memo } from 'react';
import { UIActivityIndicator } from 'react-native-indicators';
import styled from 'styled-components/native';

import type { FunctionComponent } from 'react';
import type { ViewProps } from 'react-native';

import { useCustomTheme } from '@hooks/theme';
import { variables } from '@assets/variables';

interface Props extends ViewProps {
  visible?: boolean;
  loading?: boolean;
}

const ListFooter: FunctionComponent<Props> = (props) => {
  const { visible = true, loading, ...other } = props;

  const { colors } = useCustomTheme();

  return (
    <Fragment>
      {visible && <Footer {...other}>{loading && <UIActivityIndicator size={24} color={colors.primary} />}</Footer>}
    </Fragment>
  );
};

const Footer = styled.View`
  height: ${variables.optionHeight}px;
  justify-content: center;
  align-items: center;
`;

export default memo(ListFooter);
