import React from 'react';
import Svg, { Path } from 'react-native-svg';

import type { FunctionComponent } from 'react';

import type { IconProps } from '@typings/core';

const NextStepIcon: FunctionComponent<IconProps> = (props) => {
  const { size = 14, color, ...other } = props;

  return (
    <Svg width={size} height={size} viewBox="0 0 9 16" fill="none" {...other}>
      <Path
        d="M1.28 15.477c.324 0 .59-.116.805-.332l6.367-6.217c.282-.282.423-.573.423-.93 0-.356-.133-.655-.423-.93L2.085.844a1.158 1.158 0 00-1.967.822c0 .315.132.614.365.847l5.644 5.487-5.644 5.478a1.197 1.197 0 00-.365.847c0 .639.523 1.153 1.162 1.153z"
        fill={color}
      />
    </Svg>
  );
};

export default NextStepIcon;
