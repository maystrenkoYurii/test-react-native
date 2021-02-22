import { AppRegistry } from 'react-native';

import App from '@containers/App';

import { constants } from '@core/constants';

AppRegistry.registerComponent(constants.APP_ROOT, () => App);
