import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap'

import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-react-test-nine.vercel.app/',
  integrations: [tailwind(), mdx(), react(), sitemap(), robotsTxt()],
  output: 'hybrid',
  adapter: vercel(),
})
