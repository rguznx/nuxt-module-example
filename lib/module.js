const path = require('path')

module.exports = function SimpleModule(moduleOptions) {
  console.log('LOADED YES!!!')
  this.addPlugin(path.resolve(__dirname, 'plugin.js'))
}

module.exports.meta = require('./../package.json')
