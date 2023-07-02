/**
 * @param ...inputs: Kelimelerin toplandığı array.
 * @returns Girilen kelimelerin hepsinin düzeltilmiş halinin bulunduğu bir **array** döndürür
 * ```js
 * (async () => {
 *   const correcter = require('yazim-hatasi-duzeltme')
 *   await correcter('keliöe') // => [ 'kelime' ]
 *   await correcter('yprgun', 'yqramaz', 'yaaramaz') // => [ 'yorgun', 'yaramaz', 'yaramaz' ]
 * })()
 * ```
 */

const correcter = require('./function')

module.exports = correcter