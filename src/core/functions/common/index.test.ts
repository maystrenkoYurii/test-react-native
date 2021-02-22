import { isDevelopment } from '@functions/common';

describe('Test isDevelopment function', () => {
  test('Function isDevelopment should return boolean', () => {
    expect(typeof isDevelopment()).toBe('boolean');
  });
});
