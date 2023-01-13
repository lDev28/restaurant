const d = document

const wrapperBlock = d.querySelector('.wrapper')


const introTitle = d.querySelectorAll('.intro__title')

for (let i = 0; i < introTitle.length; i++) {
	const elem = introTitle[i];

	const toOtherElems = elem.textContent.split(' ')
	const toLastElem = elem.textContent.split(' ')

	delete toOtherElems[toOtherElems.length - 1]

	const lastElem = toLastElem[toLastElem.length - 1]

	const htmlTitle = `
		${toOtherElems.join(' ')} <span style="color:#BC9060">${lastElem}</span>
	`
	elem.innerHTML = htmlTitle
}



const coloredTitle = d.querySelectorAll('.title')
const titleColor = '#D67E34'

for (let i = 0; i < coloredTitle.length; i++) {
	const titleElem = coloredTitle[i];

	const toOtherTitleElems = titleElem.textContent.split(' ')
	const toLastTitleElem = titleElem.textContent.split(' ')

	delete toOtherTitleElems[toOtherTitleElems.length - 1]

	const lastTitleElem = toLastTitleElem[toLastTitleElem.length - 1]

	const readyTitle = `
		${toOtherTitleElems.join(' ')} <span style="color:${titleColor}">${lastTitleElem}</span>
	`
	titleElem.innerHTML = readyTitle
}



// MENU BURGER
const burgerMenu = d.getElementById('burgerMenu')


const burgerStatus = {
	opened: false
}
burgerMenu.addEventListener('click', setBurgerFunc)
function setBurgerFunc() {
	const headerMenu = d.querySelector('.header__menu')
	d.querySelector('.header__menu').classList.toggle('active')
	d.querySelector('.header__burger').classList.toggle('active')
	d.querySelector('.header__burger-elem').classList.toggle('active')
	if (headerMenu.className == 'header__menu active') {
		burgerStatus.opened = true
	} else {
		burgerStatus.opened = false
	}

	d.getElementById('btnTop').classList.toggle('active')
}




// SCROLL BTN

const btnTop = d.getElementById('btnTop')

btnTop.addEventListener('click', () => {

	wrapperBlock.scrollTo({
		top: 0,
		behavior: "smooth"
	})
})


wrapperBlock.addEventListener('scroll', () => {
	if (wrapperBlock.scrollTop > 100) {
		btnTop.style.display = 'block'
		btnTop.style.opacity = '100%'
	} else {
		btnTop.style.display = 'none'
	}
})


// SCROLL NAV


wrapperBlock.addEventListener('scroll', () => {

	let wrapperHigth = wrapperBlock.scrollHeight

	const wrapperTotalHight = wrapperBlock.scrollTop

	const scrollNav = d.querySelector('.scroll-nav')

	let scrollNavHight = (wrapperTotalHight * 100) / wrapperHigth

	scrollNav.style.width = `${scrollNavHight + 12}%`
})


const menuLink = d.querySelector('#menuLink')
const menuSection = d.querySelector('.menu')
menuLink.addEventListener('click', () => {
	setScroll()
	setBurgerFunc()
})

function setScroll() {
	const topOffset = d.querySelector('.menu').offsetHeight * 1.6;
	const elementPosition = menuLink.getBoundingClientRect().top;
	const offsetPosition = elementPosition - topOffset;
	const scrollCoordinate = offsetPosition + (offsetPosition * -1) * 2
	wrapperBlock.scrollBy({
		top: scrollCoordinate,
		behavior: 'smooth'
	});
}

// console.log(wrapperHigth);


// LOADER
// const images = d.querySelectorAll('img')

// for (const image of images) {
// 	image.addEventListener('load', loaded)
// }

// function loaded() {
// 	const loader = d.querySelector('.loader')
// 	loader.style.display = 'none'
// }


// SLIDER

let viewport = d.getElementById("menuSlider").offsetWidth;
let btnNext = d.getElementById("menuSliderNextBtn");
let btnPrev = d.getElementById("menuSliderPrevBtn");
let slider = d.querySelector(".menu-slider__track");
let viewSliders = d.querySelectorAll(".menu-slider__viewSlide");
let viewSlide = 0;

viewSliders[0].classList.add('active')


btnNext.addEventListener("click", nextBtnFunc);

function nextBtnFunc() {
	viewSliders[viewSlide].classList.remove('active')
	if (viewSlide < 7) {
		viewSlide++;
	} else {
		viewSlide = 0;
	}
	viewSliders[viewSlide].classList.add('active')
	slider.style.left = -viewSlide * viewport + "px";

}

setInterval(nextBtnFunc, 3000);


btnPrev.addEventListener("click", function () {
	viewSliders[viewSlide].classList.remove('active')
	if (viewSlide > 0) {
		viewSlide--;
	} else {
		viewSlide = 7;
	}
	viewSliders[viewSlide].classList.add('active')
	slider.style.left = -viewSlide * viewport + "px";
});


