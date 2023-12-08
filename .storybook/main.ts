import path from 'path'

import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public/'],
  webpackFinal: async (config) => {
    ;((config.resolve as any).alias['@'] = path.resolve(__dirname, '../')),
      ((config.resolve as any).alias['@/components'] = path.resolve(
        __dirname,
        '../components',
      ))

    return config
  },
}
export default config
