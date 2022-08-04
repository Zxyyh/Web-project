const animasi2 = document.querySelector('.header .nav-bar .nav-list .animasi2');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

animasi2.addEventListener('click', () => {
	animasi2.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		animasi2.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

AOS.init({
	offset: 200, 
	delay: 100, 
	duration: 400, 
	easing: 'ease', 
	once: false, 
	mirror: false, 
	anchorPlacement: 'top-bottom', 
  });