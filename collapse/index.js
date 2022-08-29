/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */

(function () {
    const hiddenBtn = document.querySelector('.collapsible__action--visible');//кнопка скрыть
    const btn = document.querySelector('.collapsible__action--hidden');//кнопка показать
    const hiddenContent = document.querySelector('.collapsible__content');// контент
    
    btn.style.display = 'none';

    hiddenBtn.addEventListener('click', () => {
        // console.log(1);
        btn.style.display = 'block';
        hiddenBtn.style.display = 'none';
        hiddenContent.style.display = 'none';
    });
    btn.addEventListener('click', () => {
        // console.log(2);
        btn.style.display = 'none';
        hiddenBtn.style.display = '';
        hiddenContent.style.display = '';
    });
  }());
