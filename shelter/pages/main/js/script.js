console.log("Задание выполнено в соответсвии с требованиями 110/110")

import pets from "../js/pets.js";
import { addCardsListener, addListenersClosePopup } from "../js/popup.js";


const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const swiperContainer = document.querySelector(".swiper__container");
const leftSlide = document.querySelector("#left-slide");
const rightSlide = document.querySelector("#right-slide");
const currentSlide = document.querySelector("#current-slide");

// create preve slide cards
for (let i = 0; i <= 2; i++) {
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

    rightSlide.append(card);
}
// create current slide cards
for (let i = 0; i <= 2; i++) {
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

    currentSlide.append(card);
}
// create next slide cards
for (let i = 0; i <= 2; i++) {
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

    leftSlide.append(card);
}

function getStartSlide() {
    let differentNums = [];
    for (let i = 0; differentNums.length < 3; i++) {
        let randomNum = getRandomNum(0, pets.length - 1);
        if (!differentNums.includes(randomNum)) {
            differentNums.push(randomNum);
        }
    }

    let currentSlideCards = currentSlide.querySelectorAll('.card');
    let currentSlideImgs = currentSlide.querySelectorAll('.card__img');
    for (let i = 0; i < differentNums.length; i++) {
        currentSlideImgs[i].setAttribute("src", `../../assets/images/${pets[differentNums[i]].img}`);
        currentSlideCards[i].dataset.num = differentNums[i];
        currentSlideImgs[i].closest('.card__img-block').nextElementSibling.firstElementChild.textContent = pets[differentNums[i]].name;
    }
}

getStartSlide();

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCurrentCardNums() {
    let currentCardsNums = [];
    currentSlide.querySelectorAll('.card').forEach(item => {currentCardsNums.push(Number(item.dataset.num))});
    return currentCardsNums;
}

function getDifferentNums() {
    let currentCardsNums = getCurrentCardNums();
    let differentNums = [];
    for (let i = 0; differentNums.length < 3; i++) {
        let randomNum = getRandomNum(0, pets.length - 1);
        if (!differentNums.includes(randomNum) && !currentCardsNums.includes(randomNum)) {
            differentNums.push(randomNum);
        }
    }
    return differentNums;
}

localStorage.removeItem('prev-right-cards');
localStorage.removeItem('prev-left-cards');

function changeToLeftSlide() {
    let prevCurrentCards = getCurrentCardNums();
    let leftCardNums;
    if (localStorage.getItem('prev-left-cards')) {
        leftCardNums = (localStorage.getItem('prev-left-cards').split(',')).map(function(item) {return Number(item)});
        localStorage.removeItem('prev-left-cards');
    } else {
        leftCardNums = getDifferentNums();
    }

    let leftSlideCards = leftSlide.querySelectorAll('.card');
    let leftSlideImgs = leftSlide.querySelectorAll('.card__img');
    for (let i = 0; i < leftSlideImgs.length; i++) {
        leftSlideImgs[i].setAttribute("src", `../../assets/images/${pets[leftCardNums[i]].img}`);
        leftSlideCards[i].dataset.num = leftCardNums[i];
        leftSlideImgs[i].closest('.card__img-block').nextElementSibling.firstElementChild.textContent = pets[leftCardNums[i]].name;
    }
    localStorage.setItem('prev-right-cards', prevCurrentCards);
}

function changeToRightSlide() {
    let prevCurrentCards = getCurrentCardNums();
    let rightCardNums;
    if (localStorage.getItem('prev-right-cards')) {
        rightCardNums = (localStorage.getItem('prev-right-cards').split(',')).map(function(item) {return Number(item)});
        localStorage.removeItem('prev-right-cards');
    } else {
        rightCardNums = getDifferentNums();
    }

    let rightSlideCards = rightSlide.querySelectorAll('.card');
    let rightSlideImgs = rightSlide.querySelectorAll('.card__img');
    for (let i = 0; i < rightSlideImgs.length; i++) {
        rightSlideImgs[i].setAttribute("src", `../../assets/images/${pets[rightCardNums[i]].img}`);
        rightSlideCards[i].dataset.num = rightCardNums[i];
        rightSlideImgs[i].closest('.card__img-block').nextElementSibling.firstElementChild.textContent = pets[rightCardNums[i]].name;
    }
    localStorage.setItem('prev-left-cards', prevCurrentCards);
}

const moveLeft = () => {
    swiperContainer.classList.add("transition-left");
    changeToLeftSlide();
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
}
const moveRight = () => {
    swiperContainer.classList.add("transition-right");
    changeToRightSlide();
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
}

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

swiperContainer.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
        swiperContainer.classList.remove("transition-left");

        document.querySelector("#current-slide").innerHTML = leftSlide.innerHTML;

    } else {
        swiperContainer.classList.remove("transition-right");

        document.querySelector("#current-slide").innerHTML = rightSlide.innerHTML;

    }
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
    addCardsListener();
})

// popup start
addCardsListener();
addListenersClosePopup();