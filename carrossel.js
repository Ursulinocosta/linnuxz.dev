const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      block: "nearest", 
    });

    items[currentItem].classList.add("current-item");
  });
});


/*Carrossel grande Desativado*/

/*
const carousel = document.querySelector('.carousel');
let currentIndex = 0;


const firstClone = carousel.firstElementChild.cloneNode(true);
const lastClone = carousel.lastElementChild.cloneNode(true);
carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, carousel.firstElementChild);

const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
    const newTransformValue = -index * 100 + '%';
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = 'translateX(' + newTransformValue + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;

 
    if (currentIndex === slides.length - 1) {
        carousel.style.transition = 'none';
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;


    if (currentIndex === 0) {
        carousel.style.transition = 'none';
        currentIndex = slides.length - 1;
    }

    showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", function () {
    setInterval(nextSlide, 5000);
});*/


