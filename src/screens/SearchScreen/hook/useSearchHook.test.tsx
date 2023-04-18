import { renderHook } from '@testing-library/react-native';
import useSearchHook from './useSearchHook';

jest.mock('../../../core/api', () => {
  return {
    getEyesList: jest.fn().mockResolvedValue({ data: [] }),
  };
});

describe('useSearchHook unit testing', () => {
  it('should return the correct value', () => {
    const { result } = renderHook(() => useSearchHook());
    console.log('RESUl', result);
  });
});
