import { useEffect } from 'react';
import { InteractionManager } from 'react-native';

import type { Callback } from '@typings/utils';

export const useInteractionEffect = (callback: Callback): void => {
  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(callback);

    return () => task.cancel();
  }, [callback]);
};
