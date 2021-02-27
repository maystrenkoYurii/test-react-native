import { AppRegistry } from 'react-native';

import Root from '@presentational/Root';

import { constants } from '@core/constants';

AppRegistry.registerComponent(constants.APP_ROOT, () => Root);
