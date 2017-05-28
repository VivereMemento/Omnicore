const mySlideshow = (function () {

	const slides = document.querySelector('#slideshow').children;
	const dotsPromo = document.querySelector("#dots-promo").children;
	let slideIndex = 0;

	const init = function () {
		_setUpListners();
	}

	const _setUpListners = function () {
		Array.from(dotsPromo).forEach(item => item.addEventListener('click', _currentSlide));
		_showSlides();
	}

	function _currentSlide() {
		const arrOfDots = Array.from(dotsPromo).map((item) => item);
		let i = arrOfDots.indexOf(this);
		_showSlides(slideIndex = i);
	}

	function _showSlides() {

		Array.from(slides).forEach(function(item) {
				item.style.display = "none";
		});


		Array.from(dotsPromo).forEach((item) => {
				item.className = item.className.replace(" active", "");
		});

		slideIndex++;
		if (slideIndex > slides.length) {slideIndex = 1};

		slides[slideIndex-1].style.display = "block";
		dotsPromo[slideIndex-1].className += " active";
	}

	setInterval(_showSlides, 2000); // Change image every 2 seconds

	return {
		 init: init
	}

})();

mySlideshow.init();
