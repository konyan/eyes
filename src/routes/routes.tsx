import { createStackNavigator } from '@react-navigation/stack';
import { Platform, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { mainScreens } from './routeConfig';

const Stack = createStackNavigator();

export const Routes = () => {
  const routes = mainScreens;
  const injectWebStyles = Platform.OS === 'web' ? 'max-w-205 shadow-xl mx-auto w-full' : '';
  return (
    <SafeAreaProvider>
      <View style={tw`h-full ${injectWebStyles}`}>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: Platform.OS === 'ios',
          }}
        >
          {routes.map((route) => (
            <Stack.Screen key={route.name} name={route.name} component={route.component} options={route.options} />
          ))}
        </Stack.Navigator>
      </View>
    </SafeAreaProvider>
  );
};

export default Routes;
