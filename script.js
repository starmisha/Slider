document.addEventListener('DOMContentLoaded', () => {
	const slides = document.querySelectorAll('.slide');

	const prev = document.querySelector('.prev');
	const next = document.querySelector('.next');
	const slideLinks = document.querySelectorAll('.flex-categories a');

	const dotsContainer = document.querySelector('.dots');
	let currentSlide = 0;

	// Создаём точки динамически
	slides.forEach((slide, index) => {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		if (index === currentSlide) {
			dot.classList.add('active');
		}
		dotsContainer.appendChild(dot);
	});

	const dots = document.querySelectorAll('.dot');

	// Функция для показа слайда по индексу
	const showSlide = (index) => {
		// Обновляем слайды
		slides.forEach(slide => slide.classList.remove('active'));
		slides[index].classList.add('active');
		slideLinks[index].classList.add('active')



		// Обновляем точки
		dots.forEach(dot => dot.classList.remove('active'));
		dots[index].classList.add('active');
	};

	next.addEventListener('click', () => {
		currentSlide = (currentSlide + 1) % slides.length; // Цикличность
		showSlide(currentSlide);
	});


	prev.addEventListener('click', () => {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Цикличность
		showSlide(currentSlide);
	});




	// Обработчики для точек
	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			currentSlide = index;
			showSlide(currentSlide);
		});
	});
	slideLinks.forEach((link, index) => {
		link.addEventListener('click', () => {
			currentSlide = index;
			showSlide(currentSlide);
		});
	});

	// Инициализация - показать первый слайд
	showSlide(currentSlide);
});
