import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'IOTA UI KIT',
  brandUrl: 'https://www.iota.org/',
  brandImage: '/logo.svg',
  brandTarget: '_blank',

  //
  colorPrimary: '#0101FF',
  colorSecondary: '#0101AB',

  // UI
  appBg: '#F1F5F9',
  appContentBg: '#F1F5F9',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#F1F5F9',
  textMutedColor: '#A6C3FC',
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#0101AB',
  barBg: '#F1F5F9',
  barHoverColor: '#E0EAFF',

  // Form colors
  inputBg: '#F1F5F9',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,

  // Boolean checkbox
  booleanBg: '#ECF4F9',
  booleanSelectedBg: '#F8FAFC',

  // Button colors
  buttonBg: '#A6C3FC',
  buttonBorder: '#A6C3FC',
});
