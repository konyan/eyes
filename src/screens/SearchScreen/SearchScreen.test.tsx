import { HeaderSection, SearchInput } from '@components';
import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import useSearchHook from './hook/useSearchHook';
import SearchScreen from './SearchScreen';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock('./hook/useSearchHook.tsx');
jest.mock('../../components/HeaderSection/HeaderSection');
jest.mock('../../components/SearchInput/SearchInput');

const mockUserSearchHook = useSearchHook as jest.MockedFunction<typeof useSearchHook>;

const mockHeaderComponent = HeaderSection as jest.MockedFunction<typeof HeaderSection>;

const mockSearchComponent = SearchInput as jest.MockedFunction<typeof SearchInput>;

describe('SearchScreen', () => {
  const renderUI = () => {
    mockHeaderComponent.mockImplementation(() => <View testID="headerSection-test" />);
    mockSearchComponent.mockImplementation(() => <View testID="searchInput-test" />);
    mockUserSearchHook.mockReturnValue({
      eyes: [
        {
          id: 1,
          question: 'နတ်မျက်စိ ဗေဒင်',
          type: 'နတ်မျက်စိ',
          answers: ['နတ်မျက်စိ ဗေဒင်'],
        },
      ],
      setEyes: jest.fn(),
    });
    return render(<SearchScreen />);
  };

  it('renders header component in Search Screen', () => {
    renderUI();
    expect(screen.getByTestId('headerSection-test')).not.toBeNull();
  });

  it('renders SearchInput component in Search Screen', () => {
    renderUI();
    expect(screen.getByTestId('searchInput-test')).toBeTruthy();
  });
});
