import { StackNavigationOptions } from '@react-navigation/stack';

interface IScreen<T = string> {
  name: keyof T | string;
  component: React.FC;
  options?: StackNavigationOptions;
}

export default IScreen;
