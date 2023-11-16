import { create } from '@storybook/theming/create';
import { CUSTOM_COLORS } from '../src/lib/constants';

export default create({
  base: 'light',
  brandTitle: 'IOTA UI KIT',
  brandUrl: 'https://www.iota.org/',
  brandImage: '/logo.svg',
  brandTarget: '_blank',

  // UI
  colorPrimary: CUSTOM_COLORS['iota-blue'][700],
  colorSecondary: CUSTOM_COLORS['iota-blue'][900],
  appBg: CUSTOM_COLORS['iota-gray'][100],
  appContentBg: CUSTOM_COLORS['iota-gray'][100],
  appBorderRadius: 4,

  // Text colors
  textColor: CUSTOM_COLORS['iota-gray'][800],
  textInverseColor: CUSTOM_COLORS['iota-gray'][100],
  textMutedColor: CUSTOM_COLORS['iota-blue'][300],
  // Toolbar default and active colors
  barTextColor: CUSTOM_COLORS['iota-blue'][900],
  barSelectedColor: CUSTOM_COLORS['iota-blue'][900],
  barBg: CUSTOM_COLORS['iota-gray'][100],
  barHoverColor: CUSTOM_COLORS['iota-blue'][400],

  // Form colors
  inputBg: CUSTOM_COLORS['iota-gray'][100],
  inputTextColor: CUSTOM_COLORS['iota-gray'][800],
  inputBorderRadius: 2,

  // Boolean checkbox
  booleanBg: CUSTOM_COLORS['iota-gray'][200],
  booleanSelectedBg: CUSTOM_COLORS['iota-gray'][50],

  // Button colors
  buttonBg: CUSTOM_COLORS['iota-blue'][300],
  buttonBorder: CUSTOM_COLORS['iota-blue'][300],
});
