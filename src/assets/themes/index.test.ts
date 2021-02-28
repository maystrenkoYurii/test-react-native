import { CustomLightTheme, CustomDarkTheme } from '@assets/themes';

describe('Test theme colors map', () => {
  const light = Object.keys(CustomLightTheme.colors);
  const dark = Object.keys(CustomDarkTheme.colors);

  test('Keys light equals keys dark', () => {
    expect(light).toEqual(dark);
  });
});
