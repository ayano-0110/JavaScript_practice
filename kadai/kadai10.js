let target = document.getElementById('text01');
target.addEventListener('blur', function() {        //入力欄からフォーカスが外れた時にメッセージを表示したいのでfocus ではなく blur 
    let span = document.getElementById('msg');
    span.textContent = target.value;             //// 入力された文字列をspanに表示
    span.classList.remove('hidden');
});