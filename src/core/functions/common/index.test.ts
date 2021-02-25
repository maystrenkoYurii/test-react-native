import { getApiHost } from '@functions/common';

describe('Test getApiHost function', () => {
  test('Function getApiHost should return string', () => {
    expect(typeof getApiHost()).toBe('string');
  });
});
