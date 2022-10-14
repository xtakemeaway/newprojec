// Объявление функции инициализации карты
function init(){
	// Создаем новый объект карты
	const map = new ymaps.Map('map', {
		// Координаты карты
		center: [55.73213730697374,37.595185079162576],
		// Масштаб
		zoom: 15,
	});

	// Значение маркера на карте
	const placeMark = new ymaps.Placemark([55.73213730697374,37.595185079162576], {
		// Контент балуна
		balloonContent: 
		`
			<div class="balloon">
				<div class="balloon__text">Контент балуна</div>
				<div class="balloon__content">
					<a class="balloon__link" href="">Ссылка балуна</a>
				</div>
			</div>
		`
	}, {
		iconLayout: 'default#image',
		// Путь до картинки
		iconImageHref: '',
		// Размер картинки
		iconImageSize: [20, 20],
		// Отступы картинки
		iconImageOffset: [0, 0],
	});

	// Дополнительные настройки карты

	// Удаление геолокации
	map.controls.remove('geolocationControl'); 
	// Удаление поиска
  map.controls.remove('searchControl');
	// Удаление контроля трафика
  map.controls.remove('trafficControl');
	// Удаление типа
  map.controls.remove('typeSelector');
	// Удаление полноэкранного режима
  map.controls.remove('fullscreenControl');
	// Удаление зума
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
	// Удаоение скролла карты
  map.behaviors.disable(['scrollZoom']);

	// Добавляем маркер на карту
	map.geoObjects.add(placeMark);

	// Открытие балуна по умолчанию
	placeMark.balloon.open();
}

ymaps.ready(init);

// Положение координат - https://yandex.ru/map-constructor/location-tool/?from=club