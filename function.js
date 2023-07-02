module.exports = async (...inputs) => {
  const { Octokit } = require('octokit')
  const didYouMean = require('didyoumean2').default
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

  return [...inputs.map(item => didYouMean(item, kelimeler))]
}
