var postcss = require('postcss')

module.exports = postcss.plugin('postcss-export', function () {
  return function (root) {
    root.walkRules(':export', function (rule) {
      rule.selector = ':root'
    })
  }
})
