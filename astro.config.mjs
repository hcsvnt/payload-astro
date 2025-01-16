// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    experimental: {
        svg: {
            mode: 'sprite', // or 'inline'
        },
    },
    i18n: {
        locales: ['en-US', 'pl-PL', 'de-DE', 'es-ES'],
        defaultLocale: 'pl-PL',
    },
    output: 'server', // 'server' for SSR or 'static' for SSG
    vite: {
        ssr: {
            noExternal: ['webcoreui'],
        },
    },

    adapter: vercel(),
});
