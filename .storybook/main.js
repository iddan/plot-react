module.exports = {
  stories: ["../src/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ['../test'],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};