window.onload = function () {
    const sliderBlock = document.querySelector('.slider-left');
    const sliderImage = document.querySelector('.slider-right');
    const [prev, next] = document.querySelectorAll('.btns button');
    const totalIndex = sliderBlock.children.length;
    let crrentIndex = 1;
    prev.addEventListener('click', toPrev);
    next.addEventListener('click', toNext);

    function toPrev() {
        --crrentIndex < 1 && (crrentIndex = totalIndex);
        slider();
        prev.removeEventListener('click', toPrev);
        setTimeout(() => prev.addEventListener('click', toPrev), 500);
    }
    function toNext() {
        ++crrentIndex > totalIndex && (crrentIndex = 1);
        slider();
        next.removeEventListener('click', toNext);
        setTimeout(() => next.addEventListener('click', toNext), 500);
    }
    function slider() {
        sliderBlock.style.transform = `translateY(${-(totalIndex - crrentIndex) * 100}%)`;
        sliderImage.style.transform = `translateY(${-(crrentIndex - 1) * 100}%)`;
    }
};
