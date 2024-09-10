const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let index = 0;
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

const dotsDiv = document.querySelector(".dots");
const generateDots = (index) => {
  dotsDiv.innerHTML = "";

  slides.forEach((_, i) => {
    const div = document.createElement("div");
    div.className = i === index ? "dot dot_selected" : "dot";
    dotsDiv.appendChild(div);
  });
};

generateDots(index);

function navigateCarousel(direction) {
  index += direction;
  index = index < 0 ? slides.length - 1 : index > slides.length - 1 ? 0 : index;
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
  generateDots(index);
}

const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", () => navigateCarousel(-1));

const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", () => navigateCarousel(1));
