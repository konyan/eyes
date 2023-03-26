import IScreen from './IScreen';

export const mainScreens: IScreen<never>[] = [
  {
    name: 'Main',
    component: MainRoutes,
    options: {
      headerShown: false,
    },
  },
];
