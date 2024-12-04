/** @type { import('@storybook/react').Preview } */
import "../src/tailwind.css"; // Adjust the path to your Tailwind CSS file

const preview = {
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
