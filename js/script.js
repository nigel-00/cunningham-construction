const header=document.querySelector("header");

window.addEventListener ("scroll", function() {
		header.classList.toggle ("sticky", window.scrollY > 100);
	});

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick=()=> {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
}

;

window.onscroll=()=> {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

