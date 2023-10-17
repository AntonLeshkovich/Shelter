import pets from "../../main/js/pets.js";
import { addCardsListener, addListenersClosePopup } from "../../main/js/popup.js";

const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');
const BTN_FIRST_PAGE = document.querySelector('#btn-first-page');
const BTN_LAST_PAGE = document.querySelector('#btn-last-page');
const swiperContainer = document.querySelector('.swiper__container');
const slideLeft = document.querySelector('#left-slide');
const slideRight = document.querySelector('#right-slide');
const slideCurrent = document.querySelector('#current-slide');
const paginationBlock = document.querySelector('.navigation__paginator');


// create current slide
for (let i = 0; i <= 7; i++) {
    const card = document.createElement('div');
    const cardImgBlock = document.createElement('div');
    const img = document.createElement('img');
    const cardDesc = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const cardBtnBlock = document.createElement('div');
    const cardLink = document.createElement('a');

    card.className = "swiper__slide-card card";
    cardImgBlock.className = "card__img-block";
    img.className = "card__img";
    cardDesc.className = "card__desc";
    cardTitle.className = "card__title";
    cardBtnBlock.className = "card__btn-block";
    cardLink.className = "card__link btn btn__secondary";

    img.setAttribute("src", "#!");
    img.setAttribute("alt", "friends-pet");
    cardLink.setAttribute("href", "#!")

    cardLink.textContent = "Learn more";

    card.append(cardImgBlock);
    cardImgBlock.append(img);
    card.append(cardDesc);
    cardDesc.append(cardTitle);
    cardDesc.append(cardBtnBlock);
    cardBtnBlock.append(cardLink);

    slideCurrent.append(card);
}
// create left slide
for (let i = 0; i <= 7; i++) {
    const card = document.createElement('div');
    const cardImgBlock = document.createElement('div');
    const img = document.createElement('img');
    const cardDesc = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const cardBtnBlock = document.createElement('div');
    const cardLink = document.createElement('a');

    card.className = "swiper__slide-card card";
    cardImgBlock.className = "card__img-block";
    img.className = "card__img";
    cardDesc.className = "card__desc";
    cardTitle.className = "card__title";
    cardBtnBlock.className = "card__btn-block";
    cardLink.className = "card__link btn btn__secondary";

    img.setAttribute("src", "#!");
    img.setAttribute("alt", "friends-pet");
    cardLink.setAttribute("href", "#!")

    cardLink.textContent = "Learn more";

    card.append(cardImgBlock);
    cardImgBlock.append(img);
    card.append(cardDesc);
    cardDesc.append(cardTitle);
    cardDesc.append(cardBtnBlock);
    cardBtnBlock.append(cardLink);

    slideLeft.append(card);
}

// create right slide
for (let i = 0; i <= 7; i++) {
    const card = document.createElement('div');
    const cardImgBlock = document.createElement('div');
    const img = document.createElement('img');
    const cardDesc = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const cardBtnBlock = document.createElement('div');
    const cardLink = document.createElement('a');

    card.className = "swiper__slide-card card";
    cardImgBlock.className = "card__img-block";
    img.className = "card__img";
    cardDesc.className = "card__desc";
    cardTitle.className = "card__title";
    cardBtnBlock.className = "card__btn-block";
    cardLink.className = "card__link btn btn__secondary";

    img.setAttribute("src", "#!");
    img.setAttribute("alt", "friends-pet");
    cardLink.setAttribute("href", "#!")

    cardLink.textContent = "Learn more";

    card.append(cardImgBlock);
    cardImgBlock.append(img);
    card.append(cardDesc);
    cardDesc.append(cardTitle);
    cardDesc.append(cardBtnBlock);
    cardBtnBlock.append(cardLink);

    slideRight.append(card);
}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDifferentRandomNums() {
    let differentRandomNums = [];
    for (let i = 0; differentRandomNums.length < 8; i++) {
        let randomNum = getRandomNum(0, pets.length - 1);
        if (!differentRandomNums.includes(randomNum)) {
            differentRandomNums.push(randomNum);
        }
    }
    return differentRandomNums;
}

function getPages() {
    let paginator = [];
    for (let i = 0; i <= 15; i++) {
        let page = getDifferentRandomNums();
        paginator.push(page);
    }
    return paginator;
}

const paginatorContainer = getPages();

function showStartPagePagination() {
    paginationBlock.textContent = 1;

    let currentPage = paginatorContainer[0];
    let currentSlideCards = slideCurrent.querySelectorAll('.card');
    let currentSlideImgs = slideCurrent.querySelectorAll('.card__img');
    for (let i = 0; i < currentSlideImgs.length; i++) {
        currentSlideImgs[i].setAttribute("src", `../../assets/images/${pets[currentPage[i]].img}`);
        currentSlideCards[i].dataset.num = currentPage[i];
        currentSlideImgs[i].closest('.card__img-block').nextElementSibling.firstElementChild.textContent = pets[currentPage[i]].name;
    }
}

showStartPagePagination();

window.addEventListener('resize', () => {
    function showLastPage() {
        let lastPage =  Number(paginationBlock.textContent);

        let rightPage = paginatorContainer[lastPage - 1];
        let rightSlideCards = slideRight.querySelectorAll('.card');
        let rightSlideImgs = slideRight.querySelectorAll('.card__img');
        for (let i = 0; i < rightSlideImgs.length; i++) {
            rightSlideImgs[i].setAttribute("src", `../../assets/images/${pets[rightPage[i]].img}`);
            rightSlideCards[i].dataset.num = rightPage[i];
            rightSlideImgs[i].closest('.card__img-block').nextElementSibling.firstElementChild.textContent = pets[rightPage[i]].name;
        }
    }
    if (!BTN_LAST_PAGE.classList.contains('active')) {
        
        if (window.innerWidth > 1260) {
            paginationBlock.textContent = 6;
            showLastPage();
        } else if (window.innerWidth > 650 && window.innerWidth <= 1260) {
            paginationBlock.textContent = 8;
            showLastPage();
        } else if (window.innerWidth <= 650) {
            paginationBlock.textContent = 16;
            showLastPage();
        }

    }
  });

const moveFirstPage = () => {
    if (paginationBlock.textContent > 1) {
        swiperContainer.classList.add("transition-left");
        BTN_FIRST_PAGE.removeEventListener('click', moveFirstPage);
        BTN_LAST_PAGE.removeEventListener('click', moveLastPage);
        BTN_LEFT.removeEventListener('click', moveLeft);
        BTN_RIGHT.removeEventListener('click', moveRight);

        paginationBlock.textContent = 1;

        let leftPage = paginatorContainer[0];
        let leftSlideCards = slideLeft.querySelectorAll('.card');
        let leftSlideImgs = slideLeft.querySelectorAll('.card__img');
        for (let i = 0; i < leftSlideImgs.length; i++) {
            leftSlideImgs[i].setAttribute("src", `../../assets/images/${pets[leftPage[i]].img}`);
            leftSlideCards[i].dataset.num = leftPage[i];
            leftSlideImgs[i].closest('.card__img-block').nextElementSibling.firstElementChild.textContent = pets[leftPage[i]].name;
        }
    }

    BTN_RIGHT.classList.add('active');
    BTN_LAST_PAGE.classList.add('active');
    if (paginationBlock.textContent <= 1) {
        BTN_LEFT.classList.remove('active');
        BTN_FIRST_PAGE.classList.remove('active');
    } else {
        BTN_LEFT.classList.add('active');
        BTN_FIRST_PAGE.classList.add('active');
    }
}

const moveLastPage = () => {
    let lastPage;
    if (window.innerWidth > 1260) {
        lastPage = 6;
    } else if (window.innerWidth > 650 && window.innerWidth <= 1260) {
        lastPage = 8;
    } else if (window.innerWidth <= 650) {
        lastPage = 16;
    }
    if (paginationBlock.textContent < lastPage) {
        swiperContainer.classList.add("transition-right");
        BTN_FIRST_PAGE.removeEventListener('click', moveFirstPage);
        BTN_LAST_PAGE.removeEventListener('click', moveLastPage);
        BTN_LEFT.removeEventListener('click', moveLeft);
        BTN_RIGHT.removeEventListener('click', moveRight);

        paginationBlock.textContent = lastPage;

        let rightPage = paginatorContainer[lastPage - 1];
        let rightSlideCards = slideRight.querySelectorAll('.card');
        let rightSlideImgs = slideRight.querySelectorAll('.card__img');
        for (let i = 0; i < rightSlideImgs.length; i++) {
            rightSlideImgs[i].setAttribute("src", `../../assets/images/${pets[rightPage[i]].img}`);
            rightSlideCards[i].dataset.num = rightPage[i];
            rightSlideImgs[i].closest('.card__img-block').nextElementSibling.firstElementChild.textContent = pets[rightPage[i]].name;
        }
    }

    BTN_LEFT.classList.add('active');
    BTN_FIRST_PAGE.classList.add('active');
    if (paginationBlock.textContent >= lastPage) {
        BTN_RIGHT.classList.remove('active');
        BTN_LAST_PAGE.classList.remove('active');
    } else {
        BTN_RIGHT.classList.add('active');
        BTN_LAST_PAGE.classList.add('active');
    }
}

const moveLeft = () => {
    if (paginationBlock.textContent > 1) {
        swiperContainer.classList.add("transition-left");
        BTN_LEFT.removeEventListener('click', moveLeft);
        BTN_RIGHT.removeEventListener('click', moveRight);
        BTN_FIRST_PAGE.removeEventListener('click', moveFirstPage);
        BTN_LAST_PAGE.removeEventListener('click', moveLastPage);

        paginationBlock.textContent = Number(paginationBlock.textContent) - 1;

        let leftPage = paginatorContainer[Number(paginationBlock.textContent) - 1];
        let leftSlideCards = slideLeft.querySelectorAll('.card');
        let leftSlideImgs = slideLeft.querySelectorAll('.card__img');
        for (let i = 0; i < leftSlideImgs.length; i++) {
            leftSlideImgs[i].setAttribute("src", `../../assets/images/${pets[leftPage[i]].img}`);
            leftSlideCards[i].dataset.num = leftPage[i];
            leftSlideImgs[i].closest('.card__img-block').nextElementSibling.firstElementChild.textContent = pets[leftPage[i]].name;
        }
    }

    BTN_RIGHT.classList.add('active');
    BTN_LAST_PAGE.classList.add('active');
    if (paginationBlock.textContent <= 1) {
        BTN_LEFT.classList.remove('active');
        BTN_FIRST_PAGE.classList.remove('active');
    } else {
        BTN_LEFT.classList.add('active');
        BTN_FIRST_PAGE.classList.add('active');
    }
}

const moveRight = () => {
    let lastPage;
    if (window.innerWidth > 1260) {
        lastPage = 6;
    } else if (window.innerWidth > 650 && window.innerWidth <= 1260) {
        lastPage = 8;
    } else if (window.innerWidth <= 650) {
        lastPage = 16;
    }
    if (paginationBlock.textContent < lastPage) {
        swiperContainer.classList.add("transition-right");
        BTN_LEFT.removeEventListener('click', moveLeft);
        BTN_RIGHT.removeEventListener('click', moveRight);
        BTN_FIRST_PAGE.removeEventListener('click', moveFirstPage);
        BTN_LAST_PAGE.removeEventListener('click', moveLastPage);

        paginationBlock.textContent = Number(paginationBlock.textContent) + 1;

        let rightPage = paginatorContainer[Number(paginationBlock.textContent) - 1];
        let rightSlideCards = slideRight.querySelectorAll('.card');
        let rightSlideImgs = slideRight.querySelectorAll('.card__img');
        for (let i = 0; i < rightSlideImgs.length; i++) {
            rightSlideImgs[i].setAttribute("src", `../../assets/images/${pets[rightPage[i]].img}`);
            rightSlideCards[i].dataset.num = rightPage[i];
            rightSlideImgs[i].closest('.card__img-block').nextElementSibling.firstElementChild.textContent = pets[rightPage[i]].name;
        }
    }

    BTN_LEFT.classList.add('active');
    BTN_FIRST_PAGE.classList.add('active');
    if (paginationBlock.textContent >= lastPage) {
        BTN_RIGHT.classList.remove('active');
        BTN_LAST_PAGE.classList.remove('active');
    } else {
        BTN_RIGHT.classList.add('active');
        BTN_LAST_PAGE.classList.add('active');
    }

}

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);
BTN_FIRST_PAGE.addEventListener('click', moveFirstPage);
BTN_LAST_PAGE.addEventListener('click', moveLastPage);

swiperContainer.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
        swiperContainer.classList.remove("transition-left");
        slideCurrent.innerHTML = slideLeft.innerHTML;
    } else {
        swiperContainer.classList.remove("transition-right");
        slideCurrent.innerHTML = slideRight.innerHTML;
    }

    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
    BTN_FIRST_PAGE.addEventListener('click', moveFirstPage);
    BTN_LAST_PAGE.addEventListener('click', moveLastPage);
    addCardsListener();
});



// popup start
addCardsListener();
addListenersClosePopup();
