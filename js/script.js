document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;


    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? .1 : 0;
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Start the carousel after all images are loaded
    const images = document.querySelectorAll(".slide img");
    let loadedImages = 0;

    images.forEach((image) => {
        image.addEventListener("load", function() {
            loadedImages++;
            if (loadedImages === images.length) {
                showSlide(currentIndex);
                setInterval(nextSlide, 3000);
            }
        });
    });

    // Add event listeners for next and previous buttons (if you have them)
    document.querySelector(".next-button").addEventListener("click", nextSlide);
    document.querySelector(".prev-button").addEventListener("click", prevSlide);
    

});

 

 
