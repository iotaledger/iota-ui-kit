import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'IOTA UI KIT',
  brandUrl: 'https://www.iota.org/',
  brandImage: '/white-logo.svg',
  brandTarget: '_blank',

  //
  colorPrimary: '#0101FF',
  colorSecondary: '#2559F5',

  // UI
  appBg: '#0F1729',
  appContentBg: '#0F1729',
  appBorderRadius: 4,

  // Text colors
  textColor: '#E0EAFF',
  textInverseColor: '#0F1729',
  textMutedColor: '#A6C3FC',
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#2559F5',
  barBg: '#0F1729',
  barHoverColor: '#E0EAFF',

  // Form colors
  inputBg: '#0F1729',
  inputTextColor: '#E0EAFF',
  inputBorderRadius: 2,

  // Boolean checkbox
  booleanBg: '#344256',
  booleanSelectedBg: '#2559F5',

  // Button colors
  buttonBg: '#2559F5',
  buttonBorder: '#2559F5',
});
