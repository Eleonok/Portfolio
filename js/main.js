const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const cards = Array.from( document.querySelectorAll(".gallery-card"));
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const picture = Array.from(document.querySelectorAll(".gallery-card-pic"));
const sliderBtnLeft = document.querySelector(".slider-btn-left");
const sliderBtnRight = document.querySelector(".slider-btn-right");
const sliderClose = document.querySelector(".slider-close");


navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = './img/icons/nav-open.svg';
    }
}

AOS.init();

let cardIndex = -1;
let pictureFull;

for (const card of cards) {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    cardIndex = cards.indexOf(card);
    pictureFull = picture[cardIndex].cloneNode();
    pictureFull.style.objectFit = "contain";
    sliderContainer.append(pictureFull);
    slider.classList.add("active");
  });
}

sliderBtnLeft.addEventListener("click", (event) => {
  event.preventDefault();
  changePicture("left");
});

sliderBtnRight.addEventListener("click", (event) => {
  event.preventDefault();
  changePicture("right");
});

function changePicture(dir) {
  if (dir === "left") {
    if (cardIndex > 0) {
      cardIndex--;
    } else {
      cardIndex = cards.length - 1;
    }
  } else if (dir === "right") {
    if (cardIndex < cards.length - 1) {
      cardIndex++;
    } else {
      cardIndex = 0;
    }
  }
  let newPictureFull = picture[cardIndex].cloneNode();
  newPictureFull.style.objectFit = "contain";
  pictureFull.replaceWith(newPictureFull);
  pictureFull = newPictureFull;
}

sliderClose.addEventListener("click", (event) => {
  event.preventDefault();
  slider.classList.remove("active");
  pictureFull.remove();
  newPictureFull.remove();
});