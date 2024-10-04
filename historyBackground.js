document.addEventListener("DOMContentLoaded", function() {
    const heroContent = document.getElementById("Hero_content");
    setTimeout(function() {
        heroContent.classList.add("show-hero-content");
    }, 200); // 200ms delay

    // Preload background images
    preloadImages([
        'photos/Jtown1.jpg',
        'photos/Jtown3.jpg',
        'photos/BuddistTemple2.jpeg',
        'photos/christanchurch.jpeg'
    ]);

    // Preload carousel images (if they are different from background images)
    preloadImages([
        'carousel-image-1.jpg',
        'carousel-image-2.jpg',
        'carousel-image-3.jpg'
        // Add more images if needed
    ]);
});


window.addEventListener("scroll", () => {
    const historySection = document.querySelector(".history");

    if (!historySection) return; // Ensure the section exists

    const sectionTop = historySection.offsetTop; // Distance of the section from the top of the page
    const sectionHeight = historySection.offsetHeight; // Total height of the history section
    const scrollPosition = window.scrollY + window.innerHeight; // Scroll position relative to the bottom of the viewport

    const scrollRelativeToSection = scrollPosition - sectionTop; // How much has been scrolled into the history section

    const changePoint1 = sectionHeight * 0.3; // First third of the section
    const changePoint2 = sectionHeight * 0.5; // Halfway point of the section
    const changePoint3 = sectionHeight * 0.7; // Third point of the section

    // Check if the section is in the viewport
    if (scrollPosition >= sectionTop) {
        // Determine the background image and position based on scroll position
        let backgroundImage = "";
        let backgroundPosition = "center";

        if (scrollRelativeToSection >= 0 && scrollRelativeToSection < changePoint1) {
            backgroundImage = "url('photos/Jtown1.jpg')";
        } else if (scrollRelativeToSection >= changePoint1 && scrollRelativeToSection < changePoint2) {
            backgroundImage = "url('photos/Jtown3.jpg')";
        } else if (scrollRelativeToSection >= changePoint2 && scrollRelativeToSection < changePoint3) {
            backgroundImage = "url('photos/BuddistTemple2.jpeg')";
        } else {
            backgroundImage = "url('photos/christanchurch.jpeg')";
        }

        historySection.style.backgroundImage = backgroundImage;
        historySection.style.backgroundPosition = backgroundPosition;
        historySection.style.backgroundSize = "cover"; // Ensure the image covers the section properly
    }
});




window.addEventListener('scroll', () => {
    const containers = document.querySelectorAll('.history-container');
    const triggerBottom = window.innerHeight * 0.75; // 75% of viewport height
    
    containers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top;

        if (containerTop < triggerBottom) {
            container.classList.add('in-view');
        } else {
            container.classList.remove('in-view');

        }
    });
});


let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function changeSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

// Initialize
showSlides();
