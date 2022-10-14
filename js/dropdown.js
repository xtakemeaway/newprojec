/* Выпадающее меню */
document.addEventListener('DOMContentLoaded', () => {
	/* Определяем все кнопки */
	const listButtons = document.querySelectorAll('.menu__button');
	/* Определяем все дропдауны */
	const drops = document.querySelectorAll('.dropdown');
	listButtons.forEach(element => {
		element.addEventListener('click', (e) => {
			/* Определяем кнопку, которая была нажата в данный момент */
			const currentButton = e.currentTarget;
			/* Ищем дропдаун через родителя (от кнопки ищем ее родителя, а от него сам дропдаун) */
			const dropdowns = currentButton.closest('.menu__item').querySelector('.dropdown');
			/* Если эта кнопка не текущая, то мы убираем активный класс */
			listButtons.forEach(element => {
				if (element !== currentButton) {
					element.classList.remove('menu__button--active');
				}
			});
			drops.forEach(element => {
				if (element !== dropdowns) {
					element.classList.remove('dropdown--active');
				}
			});
			/* Добавляем класс, открывающий дропдаун */
			dropdowns.classList.toggle('dropdown--active');
			/* Добавляем класс на кнопку при нажатии */
			currentButton.classList.toggle('menu__button--active');
		});
	});
	/* При клике вне меню */
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.menu')) {
			listButtons.forEach(element => {
				element.classList.remove('menu__button--active');
			});
			drops.forEach(element => {
				element.classList.remove('dropdown--active');
			});
		}
	});
});

/*
<nav class="navigation">
	<ul class="menu">
		<li class="menu__item">
			<a href="#" class="menu__link">Первый пункт</a>
		</li>
		<li class="menu__item">
			<button class="button-reset menu__button">Второй пункт</button>
			<div class="dropdown">
				<ul class="dropdown__list">
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
				</ul>
			</div>
		</li>
		<li class="menu__item">
			<a href="#" class="menu__link">Третий пункт</a>
		</li>
		<li class="menu__item">
			<a href="#" class="menu__link">Четвертый пункт</a>
		</li>
		<li class="menu__item">
			<button class="button-reset menu__button">Пятый пункт</button>
			<div class="dropdown">
				<ul class="dropdown__list">
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
				</ul>
			</div>
		</li>
		<li class="menu__item">
			<button class="button-reset menu__button">Шестой пункт</button>
			<div class="dropdown">
				<ul class="dropdown__list">
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
					<li class="dropdown__item">
						<a href="#" class="dropdown__link">Подпункты</a>
					</li>
				</ul>
			</div>
		</li>
		<li class="menu__item">
			<a href="#" class="menu__link">Седьмой пункт</a>
		</li>
	</ul>
</nav>
*/