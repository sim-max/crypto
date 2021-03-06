/*--- Mobile Menu ---*/
const menuBtn = document.querySelector('.mobile-btn');
const menuIcon = document.querySelector('.mobile-btn__icon');
const menuList = document.querySelector('.header__nav');

menuBtn.addEventListener('click', function () {
	menuIcon.classList.toggle('active');
	menuList.classList.toggle('active');
	document.querySelector('body').classList.toggle('no-scroll');
})

/*--- Spoilers --- */
const allSpoilerBtn = document.querySelectorAll('.footer-nav__title');
const allSpoilerBox = document.querySelectorAll('.footer-nav__menu');

allSpoilerBtn.forEach(function (spoilerBtn) {
	spoilerBtn.addEventListener('click', function () {
		this.classList.toggle('active-tab')
		const spoilerId = this.dataset.tab;
		const spoilerBoxId = document.querySelector('#' + spoilerId);
		spoilerBoxId.classList.toggle('active-box');
	})
})