import type { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParams = {
  SCREEN_MAIN: undefined;
};

export type MainStackParams = {
  SCREEN_USERS: undefined;
  SCREEN_FOLLOWERS: undefined;
};

type RootStackNavigationProp<T extends keyof RootStackParams> = CompositeNavigationProp<
  StackNavigationProp<RootStackParams, T>,
  StackNavigationProp<MainStackParams>
>;

type RootStackScreenProps<T extends keyof RootStackParams> = {
  navigation: RootStackNavigationProp<T>;
  route: RouteProp<RootStackParams, T>;
};

type MainStackNavigationProp<T extends keyof MainStackParams> = CompositeNavigationProp<
  StackNavigationProp<MainStackParams, T>,
  StackNavigationProp<RootStackParams>
>;

type MainStackScreenProps<T extends keyof MainStackParams> = {
  navigation: MainStackNavigationProp<T>;
  route: RouteProp<MainStackParams, T>;
};
