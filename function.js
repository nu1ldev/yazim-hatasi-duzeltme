module.exports = (...inputs) => {
  const didYouMean = require('didyoumean2').default
  const kelimeler = require('./kelimeler').split('\n')
  return inputs.map(item => didYouMean(item, kelimeler))
}