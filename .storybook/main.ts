import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  core: {
    builder: '@storybook/builder-webpack5'
  }
};

export default config;
