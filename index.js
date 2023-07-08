var body = document.querySelector('body');
var themeButton = document.querySelector('.toggle');

themeButton.addEventListener('click', function() {
    if(body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        themeButton.innerHTML = 'Modo Escuro';
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        themeButton.innerHTML = 'Modo Claro';
    }
});
