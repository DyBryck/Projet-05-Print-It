const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let index = 0;

const dotsDiv = document.querySelector(".dots");
const generateDots = (index) => {
  dotsDiv.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
    if (i === index) {
      div.className = "dot dot_selected";
    } else {
      div.className = "dot";
    }
    div.id = i;
    dotsDiv.appendChild(div);
  }
};

generateDots(index);

const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", () => {
  index--;
  if (index === -1) {
    index = slides.length - 1;
  }
  bannerImg.src = slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
  generateDots(i);
});

const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", () => {
  index++;
  if (index === slides.length) {
    index = 0;
  }
  bannerImg.src = slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
  generateDots(index);
});
