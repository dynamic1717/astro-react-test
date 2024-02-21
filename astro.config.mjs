import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import node from '@astrojs/node'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react()],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
})
