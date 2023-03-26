import { screen, render } from '@testing-library/react-native';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  const setupUI = () => {
    render(<SearchInput />);
  };

  test('should render SearchInput', () => {
    setupUI();
    const searchInput = screen.getByText('SearchInput');
    expect(searchInput).toBeTruthy();
  });
});
