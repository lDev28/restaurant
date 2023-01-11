const d = document

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

const burgerMenu = d.getElementById('burgerMenu')

burgerMenu.addEventListener('click', () => {
	d.querySelector('.header__menu').classList.toggle('active')
	d.querySelector('.header__burger').classList.toggle('active')
	d.querySelector('.header__burger-elem').classList.toggle('active')
	// d.querySelector('.wrapper').classList.toggle('active')
})

// const wrapperBlock = d.querySelector('.wrapper').clientWidth
// console.log(wrapperBlock);



// SLIDER
const container = d.querySelector('.container')
const containerWidth = container.clientWidth
const menuSliderTrack = d.querySelector('.menu-slider__track')

const menuSliderItem = d.querySelectorAll('.menu-slider__item')

const countItem = 8
const countShowItem = 3
const itemToScroll = 2
let position = 0

const menuSliderNextBtn = d.getElementById('menuSliderNextBtn')
const menuSliderPrevBtn = d.getElementById('menuSliderPrevBtn')

const menuSliderItemWidth = containerWidth / countShowItem
const scrollCount = menuSliderItemWidth * itemToScroll

for (const item of menuSliderItem) {
	const menuTrackWidth = countItem * item.clientWidth + 'px'
	item.style.flexBasis = menuSliderItemWidth + 'px'
}
menuSliderTrack.style.width = containerWidth + 'px'

menuSliderNextBtn.addEventListener('click', () => {
	position += scrollCount
	console.log(position);

	if (position == 0) {
		menuSliderNextBtn.removeEventListener
	}

	menuSliderTrack.style.transform = `translateX(-${position}px)`
})


menuSliderPrevBtn.addEventListener('click', () => {
	position -= scrollCount
	console.log(position);

	menuSliderTrack.style.transform = `translateX(-${position}px)`
})
