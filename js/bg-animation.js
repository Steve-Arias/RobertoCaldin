let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    let element = document.querySelectorAll('.bg-child'); // Do Something with the scroll position
    let i = 0;
    while (!element[i].classList.contains('opaque')) {
        i++;
    }
    if ((i + 1) < element.length) {
        element[i].classList.remove('opaque');
        element[i + 1].classList.add('opaque');
    } else {
        element[i].classList.remove('opaque');
        element[0].classList.add('opaque');
    }
    console.log("hi");
}
window.addEventListener('wheel', function (e) {
    last_known_scroll_position = this.window.screenY;

    if (!ticking) {
        this.window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;

        });

        ticking = true;
    }
})





