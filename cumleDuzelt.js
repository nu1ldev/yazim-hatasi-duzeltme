const didYouMean = require("didyoumean2").default
const kelimeler = require('./kelimeler').split('\n')

module.exports = (...sentences) => {
  if (sentences.length == 1) {
    let result = ''
    const words = sentences[0].split(' ')
    words.map(word => {
      result = `${result != '' ? result + ' ' : result}${didYouMean(word, kelimeler)}`
    })
    return result
  } else {
    const correctedSentences = []
    sentences.forEach(sentence => {
      const words = sentence.split(' ')
      let result = ''
      words.forEach(word => {
        result = `${result != '' ? result + ' ' : result}${didYouMean(word, kelimeler)}`
      })
      correctedSentences.push(result)
    })
    return correctedSentences
  }
}