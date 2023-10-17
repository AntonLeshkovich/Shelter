const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');
const menuBodyWrapper = document.querySelector('.menu__body-wrapper');

const bodyWrapper = document.querySelector('.body__wrapper');
const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', (e) => {
        e._isClickWithInMenu = true;
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        bodyWrapper.classList.toggle('lock');
        menuBodyWrapper.classList.toggle('active');
    })

    menu.addEventListener('click', e => {
        e._isClickWithInMenu = true;
        if (!e.target.classList.contains('menu__body') && !e.target.classList.contains('menu__list')) {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            bodyWrapper.classList.remove('lock');
            menuBodyWrapper.classList.remove('active');
        }
    })

    body.addEventListener('click', e => {
        if (e._isClickWithInMenu) return;
        if (e.target.classList.contains('menu__body-wrapper')) {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            bodyWrapper.classList.remove('lock');
            menuBodyWrapper.classList.remove('active');
        }

    })

    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            bodyWrapper.classList.remove('lock');
            menuBodyWrapper.classList.remove('active');
        })
    })
}