const kelimeler = require('./kelimeler');
const colors = require('colors')
colors.enable()
const didYouMean = require('didyoumean2').default;
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const arrayFormat = kelimeler.split(`
`).filter(item => item);

readline.question('Bir kelimeyi yanlış yaz: ', word => {
  const corrected = didYouMean(word, arrayFormat)
  const capitalized = `${corrected.charAt(0).toUpperCase()}${corrected.slice(1)}`
  console.log(`${capitalized.green} mi demek istedin?`);
  readline.close();
});

