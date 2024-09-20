import { defineConfig } from 'vite'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

export default defineConfig({
  plugins: [
    NodeGlobalsPolyfillPlugin({
      buffer: true
    })
  ],
  resolve: {
    alias: {
      buffer: 'buffer/'
    }
  }
})
