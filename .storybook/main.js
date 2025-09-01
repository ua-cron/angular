module.exports = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": ["@storybook/addon-links", "@storybook/addon-docs"],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
