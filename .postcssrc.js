// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "precss": {},
    "postcss-cssnext": {},
    "postcss-px-to-viewport":{
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 4,
      viewportUnit: 'vw'
    },
    "postcss-write-svg": { utf8: false }
  }
}
