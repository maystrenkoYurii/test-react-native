import React, { forwardRef, useEffect, useRef, memo } from 'react';
import DropdownMessage from 'react-native-dropdownalert';
import styled from 'styled-components/native';

import type { DropdownAlertProps } from 'react-native-dropdownalert';

import { addMessageListener, removeListener } from '@functions/eventEmitter';
import { useCustomTheme } from '@hooks/theme';

import type { PropsColor } from '@typings/core';

interface Props extends DropdownAlertProps {
  focused: boolean;
}

const Message = forwardRef<DropdownMessage, Props>((props, forwardedRef) => {
  const { focused } = props;

  const { colors } = useCustomTheme();

  const dropdownRef = useRef<DropdownMessage>(null);

  const currentRef = forwardedRef && typeof forwardedRef === 'object' ? forwardedRef : dropdownRef;

  useEffect(() => {
    const listener = addMessageListener(currentRef, focused);

    return () => removeListener(listener);
  }, [currentRef, focused]);

  return (
    <Dropdown
      {...props}
      ref={currentRef}
      color={colors.white}
      successColor={colors.success}
      warnColor={colors.warning}
      errorColor={colors.error}
      infoColor={colors.info}
      updateStatusBar={false}
      closeInterval={3000}
    />
  );
});

Message.displayName = 'Message';

const Dropdown = styled(DropdownMessage).attrs<PropsColor>(({ color }) => ({
  defaultContainer: {
    flexDirection: 'row',
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
  },
  defaultTextContainer: {
    flexGrow: 1,
    flexShrink: 1,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
  },
  titleStyle: {
    color: color,
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  messageStyle: {
    color: color,
    fontSize: 14,
    lineHeight: 18,
  },
}))<PropsColor>``;

export default memo(Message);
