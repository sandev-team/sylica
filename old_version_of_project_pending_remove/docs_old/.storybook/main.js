/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/stories/**/__docs__/*.stories.tsx"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
