import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';


export default defineConfig ({ 
  integrations:  [image({serviceEntryPoint: '@astrojs/image/sharp'}), tailwind()],
  output: 'server',
  adapter: vercel(),
});