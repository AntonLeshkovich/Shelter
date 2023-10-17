import pets from "./pets.js";
function addCardsListener() {
    const POPUP = document.querySelector('.popup');
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            POPUP.classList.add('open');
            document.querySelector('.body').style.overflow = "hidden";
            POPUP.querySelector('.popup__img').setAttribute("src", `../../assets/images/${pets[this.dataset.num].modal}`);
            POPUP.querySelector('.popup__info-title').textContent = pets[this.dataset.num].name;
            POPUP.querySelector('.popup__info-subtitle').textContent = pets[this.dataset.num].type + ' - ' + pets[this.dataset.num].breed;
            POPUP.querySelector('.popup__info-text').textContent = pets[this.dataset.num].description;
            POPUP.querySelector('#age').textContent = pets[this.dataset.num].age;
            POPUP.querySelector('#inoculations').textContent = pets[this.dataset.num].inoculations;
            POPUP.querySelector('#diseases').textContent = pets[this.dataset.num].diseases;
            POPUP.querySelector('#parasites').textContent = pets[this.dataset.num].parasites;
        })
    })
}

function addListenersClosePopup() {
    const POPUP = document.querySelector('.popup');
    document.querySelector('#popup-close-btn').addEventListener('click', () => {
        POPUP.style.transition = 'opacity .3s, visibility .3s';
        POPUP.classList.remove('open');
        document.querySelector('.body').style.overflow = "visible";
    });

    document.querySelector('.body').addEventListener('click', e => {
        if (e.target == POPUP || e.target == document.querySelector('.popup__wrapper')) {
            POPUP.classList.remove('open');
            document.querySelector('.body').style.overflow = "visible";
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            POPUP.classList.remove('open');
            document.querySelector('.body').style.overflow = "visible";
        }
    })
}

export { addCardsListener, addListenersClosePopup };