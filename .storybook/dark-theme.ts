import { create } from '@storybook/theming/create';
import { CUSTOM_COLORS } from '../src/lib/constants';

export default create({
  base: 'dark',
  brandTitle: 'IOTA UI KIT',
  brandUrl: 'https://www.iota.org/',
  brandImage: '/white-logo.svg',
  brandTarget: '_blank',

  // UI
  colorPrimary: CUSTOM_COLORS['iota-blue'][700],
  colorSecondary: CUSTOM_COLORS['iota-blue'][600],
  appBg: CUSTOM_COLORS['iota-gray'][900],
  appContentBg: CUSTOM_COLORS['iota-gray'][900],
  appBorderRadius: 4,

  // Text colors
  textColor: CUSTOM_COLORS['iota-blue'][100],
  textInverseColor: CUSTOM_COLORS['iota-gray'][900],
  textMutedColor: CUSTOM_COLORS['iota-blue'][300],
  // Toolbar default and active colors
  barTextColor: CUSTOM_COLORS['iota-gray'][400],
  barSelectedColor: CUSTOM_COLORS['iota-blue'][600],
  barBg: CUSTOM_COLORS['iota-gray'][900],
  barHoverColor: CUSTOM_COLORS['iota-blue'][100],

  // Form colors
  inputBg: CUSTOM_COLORS['iota-gray'][900],
  inputTextColor: CUSTOM_COLORS['iota-blue'][100],
  inputBorderRadius: 2,

  // Boolean checkbox
  booleanBg: CUSTOM_COLORS['iota-gray'][700],
  booleanSelectedBg: CUSTOM_COLORS['iota-blue'][600],

  // Button colors
  buttonBg: CUSTOM_COLORS['iota-blue'][600],
  buttonBorder: CUSTOM_COLORS['iota-blue'][600],
});
