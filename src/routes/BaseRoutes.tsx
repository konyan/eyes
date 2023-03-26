import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';

export const baseHeaderOptions: StackNavigationOptions = {
  headerBackTitleVisible: false,
  headerStyle: {
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleAlign: 'center',
  headerBackImage: undefined,
  ...TransitionPresets.SlideFromRightIOS,
  safeAreaInsets: { top: 0, bottom: 0 },
};
