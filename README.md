# Yazım hatası düzeltici

Girilen hatalı keliemeleri düzeltip, hatasız kelimeleri (tıpa tıp aynı kelime bulundu ise) işleme sokmadan geri döndürür.

Örnek kod:
```js
(async () => {
  const correcter = require('yazim-hatasi-duzeltme')
  await correcter('keliöe') // => [ 'kelime' ]
  await correcter('yprgun', 'yqramaz', 'yaaramaz') // => [ 'yorgun', 'yaramaz', 'yaramaz' ]
  await correcter('yaramaz') // => [ 'yaramaz' ]
})()
```