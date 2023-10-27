 document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('.anim');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight) +   window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                el.classList.add('anim-active')
            }
        })
    }

    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    })
 })