import { render } from '@testing-library/react-native';
import React from 'react';
import HeaderSection from './HeaderSection';

const mockPress = jest.fn();

describe('HeaderSection', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<HeaderSection />);
    const headerSection = getByTestId('headerSection-test');
    expect(headerSection).toBeTruthy();
  });
});
