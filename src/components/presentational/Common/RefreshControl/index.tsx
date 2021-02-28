import React, { memo } from 'react';
import { RefreshControl as RNRefreshControl } from 'react-native';

import type { FunctionComponent } from 'react';
import type { RefreshControlProps } from 'react-native';

import { useCustomTheme } from '@hooks/theme';

const RefreshControl: FunctionComponent<Partial<RefreshControlProps>> = (props) => {
  const { refreshing = false, ...other } = props;

  const { colors } = useCustomTheme();

  return (
    <RNRefreshControl
      {...other}
      refreshing={refreshing}
      colors={[colors.primary]}
      progressBackgroundColor={colors.card}
      tintColor={colors.primary}
    />
  );
};

export default memo(RefreshControl);
