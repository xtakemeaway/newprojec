// Бургер-меню
const burgerMenu = document.querySelector('.burger-menu').addEventListener('click', openMenu);
const headerActions = document.querySelector('.header__actions');

function openMenu(){
	this.classList.toggle('_active');
	headerActions.classList.toggle('_active');
	document.body.classList.toggle('_lock');
}

// Projects Slider
const projectsSliderContainer = document.querySelector('.projects__swiper');
const projectsSlider = new Swiper(projectsSliderContainer, {
	loop: true,
	grabCursor: true,
	slideToClickedSlide: true,
	speed: 800,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false
	},
	navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
	on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });
      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
	breakpoints: {
		320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  }
});

// Offers Slider
const offersSliderContainer = document.querySelector('.offers__swiper');
const offersSlider = new Swiper(offersSliderContainer, {
	loop: true,
	grabCursor: true,
	slideToClickedSlide: true,
	speed: 800,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false
	},
	navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
	breakpoints: {
		320: {
      slidesPerView: 1,
    },
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
	on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });
      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});

// Partners Slider
const partnersSliderContainer = document.querySelector('.partners__swiper');
const partnersSlider = new Swiper(partnersSliderContainer, {
	loop: true,
	grabCursor: true,
	slideToClickedSlide: true,
	speed: 800,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false
	},
	navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
	breakpoints: {
		320: {
      slidesPerView: 1,
    },
		530: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		820: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
});

// Карта
function init(){
	const map = new ymaps.Map('map', {
		center: [55.73213730697374,37.595185079162576],
		zoom: 15,
	});

	// Значение маркера на карте
	const placeMark = new ymaps.Placemark([55.73213730697374,37.595185079162576], {}, {
		iconLayout: 'default#image',
		// Путь до картинки
		iconImageHref: '',
		// Размер картинки
		iconImageSize: [20, 20],
		// Отступы картинки
		iconImageOffset: [0, 0],
	});

  map.controls.remove('searchControl');
  map.controls.remove('typeSelector');
  map.controls.remove('rulerControl');


	map.geoObjects.add(placeMark);
}
ymaps.ready(init);

// Кнопка наверх
const buttonUp = document.querySelector('.button-up');
window.addEventListener('scroll', () => {
	if(window.pageYOffset > 350) {
		buttonUp.classList.add('_active');
	} else {
		buttonUp.classList.remove('_active');
	}
});
buttonUp.addEventListener('click', () => {
	window.scrollBy({
		top: -document.body.scrollHeight,
		behavior: "smooth"
	});
});
