module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: ['default', {
        discardDuplicates: true,
        discardComments: {
          removeAll: true,
        },
      }]
    }
  }
}