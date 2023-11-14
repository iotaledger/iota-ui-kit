import { CUSTOM_COLORS } from "./custom-colors.constants";
import { DEFAULT_COLORS } from "./default-colors.constants";

module.exports = {
  theme: {
    extend: {
      colors: {...DEFAULT_COLORS, ...CUSTOM_COLORS },
      opacity: {
        0.08: '0.08',
        0.16: '0.16',
      },
    },
  },
  plugins: [ ],
};
