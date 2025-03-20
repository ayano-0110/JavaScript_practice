let e1 = document.getElementById('p1');
let e2 = document.getElementById('p2');
let e3 = document.getElementById('p3');

e1.outerHTML = '<input type="text" id="p1" value="商品">';
e2.innerHTML = '<p>テキスト文字</p>';
e3.id = 'p5'; 
console.log(e3.id);   