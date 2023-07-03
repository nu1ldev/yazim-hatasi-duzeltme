# Yazım hatası düzeltici

Girilen hatalı keliemeleri düzeltip, hatasız kelimeleri (tıpa tıp aynı kelime bulundu ise) işleme sokmadan geri döndürür.

Örnek kod:
```js
const correcter = require('yazim-hatasi-duzeltme')
correcter('keliöe') // => [ 'kelime' ]
correcter('yprgun', 'yqramaz', 'yaaramaz') // => [ 'yorgun', 'yaramaz', 'yaramaz' ]
correcter('yaramaz') // => [ 'yaramaz' ]
```