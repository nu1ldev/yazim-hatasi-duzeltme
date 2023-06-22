;(async () => {
  const { Octokit } = require('octokit')
  require('colors').enable()
  const didYouMean = require('didyoumean2').default
  const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  const b64DecodeUnicode = str => decodeURIComponent(atob(str).split('').map(char => '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2)).join(''))

  const res = await octokit
    .request('GET /repos/{owner}/{repo}/contents/{file_path}', {
      owner: 'maidis',
      repo: 'mythes-tr',
      file_path: 'veriler/kelime-listesi.txt'
    })
  const kelimeler = b64DecodeUnicode(res.data.content).split(`
`)
  readline.question('Bir kelimeyi yanlış yaz: ', word => {
    const corrected = didYouMean(word, kelimeler)
    const capitalized = `${corrected.charAt(0).toUpperCase()}${corrected.slice(
      1
    )}`
    console.log(`${capitalized.green} mi demek istedin?`)
    readline.close()
  })
})()
