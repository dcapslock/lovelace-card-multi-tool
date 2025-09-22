import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  return {
    entry: {
      'card-multi-tool': 'src/main.ts'
    },
    splitting: false,
    clean: true,
    sourcemap: true,
    platform: 'browser',
    minify: !options.watch,
  }
})