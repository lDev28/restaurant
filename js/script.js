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