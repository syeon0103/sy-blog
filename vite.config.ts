import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(),
    tailwindcss('./tailwind.config.js'),
    svgr(),
  ],
})
