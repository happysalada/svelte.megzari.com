const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  plugins: [
    // Some plugins, like postcss-nested, need to run before Tailwind

    tailwindcss,

    // But others, like autoprefixer, need to run after

    // Some plugins, like postcss-nested, need to run before Tailwind
    postcssImport,

    // But others, like autoprefixer, need to run after

    autoprefixer,

    // find out why it breaks the styles
    !dev &&
      cssnano({
        preset: 'default',
      }),
  ],
}
