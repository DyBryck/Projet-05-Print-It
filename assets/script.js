const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dots = [document.getElementById("dot0"), document.getElementById("dot1"), document.getElementById("dot2"), document.getElementById("dot3")]

let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")
let bannerImg = document.querySelector(".banner-img")
let tagLine = document.querySelector("#banner p")
let i = 0

arrow_left.addEventListener("click", () => {
	dots[i].classList.remove("dot_selected")
	i--
	if (i === -1) {
		i = 3
	}
	bannerImg.src = slides[i].image
	dots[i].classList.add("dot_selected")
	tagLine.innerHTML = slides[i].tagLine
})

arrow_right.addEventListener("click", () => {
	dots[i].classList.remove("dot_selected")
	i++
	if (i === 4) {
		i = 0
	}
	bannerImg.src = slides[i].image
	dots[i].classList.add("dot_selected")
	tagLine.innerHTML = slides[i].tagLine
})