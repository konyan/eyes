import { HomeScreen, LoadingWheelScreen, ResultScreen, SearchScreen } from '@screens';
import IScreen from '../IScreen';
import { EyeStackParamList } from './eyeRoutes.model';

export const AuthRoutes: IScreen<EyeStackParamList>[] = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'LoadingWheelScreen',
    component: LoadingWheelScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'ResultScreen',
    component: ResultScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'SearchScreen',
    component: SearchScreen,
    options: {
      headerShown: false,
    },
  },
];

export default AuthRoutes;
