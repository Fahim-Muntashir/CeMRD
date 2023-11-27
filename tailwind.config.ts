/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js', './pages/**/*.,z{ts,tsx}', './public/**/*.html',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
     "primary":"#1d1437",
   }
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
