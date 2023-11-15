import type { Preview } from "@storybook/svelte";
import "../src/app.css";
import darkTheme from "./dark-theme";
import lightTheme from "./light-theme";

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: darkTheme,
      light: lightTheme,
      stylePreview: true,
  },
  },
};

export default preview;
