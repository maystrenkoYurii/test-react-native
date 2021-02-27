import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import type { FunctionComponent } from 'react';

import App from '@presentational/App';

import { store } from '@flux/store';

enableScreens();

const Root: FunctionComponent = () => {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
};

export default Root;
