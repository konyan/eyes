import { render } from '@testing-library/react-native';
import React from 'react';
import ChipText from './ChipText';

describe('ChipText', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<ChipText text="Test Chip" />);
    const chip = getByTestId('chipText-test');

    expect(chip).toBeTruthy();
  });

  it('displays correct text', () => {
    const { getByText } = render(<ChipText text="Test Chip" />);
    const chipText = getByText('Test Chip');

    expect(chipText).toBeTruthy();
  });
});
