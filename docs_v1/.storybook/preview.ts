import type { Preview } from "@storybook/react";
import "../src/tailwind.css"; // replace with the name of your tailwind css file

// .storybook/preview.js
import { withThemeByDataAttribute } from "@storybook/addon-themes";

import { withThemeByClassName } from "@storybook/addon-themes";

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
  withThemeByClassName({
    themes: {
      // nameOfTheme: 'classNameForTheme',
      light: "",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
