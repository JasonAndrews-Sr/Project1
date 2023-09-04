const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    resetCaroselTimer();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    resetCaroselTimer();
}

// No needs to add an event listener to the page load. This will run when the js file is loaded.
let slideTimer = setInterval(nextSlide, 3000); // Setting the interval to a variable allows you to store a reference to it so you can manipulate it later.

resetCaroselTimer = () => {
    clearInterval(slideTimer); //Passing in the slide interval to the clearInterval func will delete the current interval.
    slideTimer = setInterval(nextSlide, 3000); // Reset the interval by reassinging it to "slideTimer"
}

document.querySelector(".next-button").addEventListener("click", nextSlide);
document.querySelector(".prev-button").addEventListener("click", prevSlide);







