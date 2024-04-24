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
	},
]

/*
const dotsDiv = document.querySelector(".dots")
const generateDots = (index) => {
	dotsDiv.innerHTML = ""
	for (let dot = 0; dot < slides.length; dot++) {
		const div = document.createElement("div")
		if (dot === index) {
			div.className = "dot dot_selected"
		} else {
			div.className = "dot"
		}
		div.id = dot
		dotsDiv.appendChild(div)
	}
}

let i = 0
generateDots(i)

const bannerImg = document.querySelector(".banner-img")
const tagLine = document.querySelector("#banner p")

const arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click", () => {
	i--
	if (i === -1) {
		i = slides.length - 1
	}
	bannerImg.src = slides[i].image
	tagLine.innerHTML = slides[i].tagLine
	generateDots(i)
})

const arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click", () => {
	i++
	if (i === slides.length) {
		i = 0
	}
	bannerImg.src = slides[i].image
	tagLine.innerHTML = slides[i].tagLine
	generateDots(i)
})
*/

const dotsDiv = document.querySelector(".dots")
for (i = 0; i < slides.length; i++) {
	const dotDiv = document.createElement("div")
	dotsDiv.appendChild(dotDiv)

	if (i ===  ) {
		dotDiv.className = "dot dot_selected"
	} else {
		dotDiv.className = "dot"
	}
}

const arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click", () => {

})

const arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click", () => {

})