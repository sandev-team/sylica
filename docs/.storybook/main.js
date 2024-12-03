/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../stories/**/__docs__/*.stories.tsx"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
