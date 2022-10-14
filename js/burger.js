const burgerMenu = document.querySelector('.burger-menu');
// Для первого варианта
const websiteMenu = document.querySelector('.navigation__list');
// Для второго варианта (в котором мы ищем родителя, нде находится меню)
const websiteNavigation = burgerMenu.closest('.navigation');

/* 
// Используем дополнительные проверки элементов дерева
if(burgerMenu) {
	burgerMenu.addEventListener('click', (e) => {
		burgerMenu.classList.toggle('_active');
		// Используем дополнительные проверки элементов дерева
		if(websiteNavigation) {
			websiteNavigation.classList.toggle('_active');
		}
	});
}
*/
 
// Используем дополнительные проверки элементов дерева
if(burgerMenu) {
	burgerMenu.addEventListener('click', (e) => {
		// Используем дополнительные проверки элементов дерева
		if(websiteNavigation) {
			websiteNavigation.classList.toggle('_active');
		}
	});
}