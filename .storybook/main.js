/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding", // Provides an interactive tutorial for new users to learn Storybook
    "@storybook/addon-essentials", // Bundle of most commonly used addons (docs, controls, actions, viewport, backgrounds, etc.)
    "@chromatic-com/storybook", // Enables visual testing and UI review workflows with Chromatic
    "@storybook/addon-interactions", // Enables testing of component interactions and user flows
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
