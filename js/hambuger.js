function myFunction(x) {
    const menu = document.querySelector('.menu');
    const nav = document.getElementById('nav');
    const exit = document.getElementById('exit');
    x.classList.toggle("change");
    // toggle menu

    nav.classList.toggle('hide-mobile');

}