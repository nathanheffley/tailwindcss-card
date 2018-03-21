const _ = require('lodash')

function defaultOptions() {
  return {
    maxWidth: '30rem',
    borderRadius: '.25rem',
    boxShadow: '0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08)',
    padding: '1rem 1.5rem',
  }
}

module.exports = function (options) {
  options = _.isFunction(options)
    ? options(defaultOptions())
    : _.defaults(options, defaultOptions())

  return function ({ addComponents, e }) {
    addComponents([
      {
        '.card': {
          maxWidth: options.maxWidth,
          borderRadius: options.borderRadius,
          overflow: 'hidden',
          boxShadow: options.boxShadow,
        },

        '.card-image': {
          display: 'block',
          width: '100%',
        },

        '.card-content': {
          padding: options.padding,
        },
      }
    ])
  }
}
