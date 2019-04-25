var str = '測試';

//先將id=demo的內容讀出來
str = document.getElementById('demo').innerHTML

//將str後面加上'demo'放回 id=demo的內容裡
document.getElementById('demo').innerHTML = str + 'demo'