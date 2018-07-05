module.exports = function SimpleModule(moduleOptions) {
  console.log('LOADED YES!!!')
}

module.exports.meta = require('./../package.json')
