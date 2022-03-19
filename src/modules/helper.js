const smoothScroll = (e) => {
    const perem = e.tagName.toLowerCase() == 'a' ? e.getAttribute('href').substr(1) : e.closest('a').getAttribute('href').substr(1);

    document.getElementById(perem).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};

const slicer = (str, num) => {
    return str.trim().length > num ?
        str.trim().substring(0, num).trim() + '...' :
        str.trim()
}

const animate = ({
    timing,
    draw,
    duration
}) => {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}


export {
    animate,
    slicer,
    smoothScroll,
};