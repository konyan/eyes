import { StackNavigationProp } from '@react-navigation/stack';

export type EyeStackParamList = {
  HomeScreen: undefined;
  LoadingWheelScreen: undefined;
  ResultScreen: undefined;
  SearchScreen: undefined;
};

export type HomeScreenNavigationProps = StackNavigationProp<EyeStackParamList, 'HomeScreen'>;
export type LoadingWheelScreenNavigationProps = StackNavigationProp<EyeStackParamList, 'LoadingWheelScreen'>;
export type ResultScreenNavigationProps = StackNavigationProp<EyeStackParamList, 'ResultScreen'>;
export type SearchScreenNavigationProps = StackNavigationProp<EyeStackParamList, 'SearchScreen'>;
