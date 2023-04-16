import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type EyeStackParamList = {
  HomeScreen: undefined;
  LoadingWheelScreen: { result: string; question: string };
  ResultScreen: { result: string; question: string };
  SearchScreen: undefined;
};

export type HomeScreenNavigationProps = StackNavigationProp<EyeStackParamList, 'HomeScreen'>;
export type LoadingWheelScreenNavigationProps = StackNavigationProp<EyeStackParamList, 'LoadingWheelScreen'>;
export type ResultScreenNavigationProps = StackNavigationProp<EyeStackParamList, 'ResultScreen'>;
export type SearchScreenNavigationProps = StackNavigationProp<EyeStackParamList, 'SearchScreen'>;

export type HomeScreenRouteProp = RouteProp<EyeStackParamList, 'HomeScreen'>;
export type LoadingWheelScreenRouteProp = RouteProp<EyeStackParamList, 'LoadingWheelScreen'>;
export type ResultScreenRouteProp = RouteProp<EyeStackParamList, 'ResultScreen'>;
export type SearchScreenRouteProp = RouteProp<EyeStackParamList, 'SearchScreen'>;
