function preloadImages() {
    const images = document.querySelectorAll("img");
    const totalImages = images.length;
    let imagesLoaded = 0;

    // Track loaded images
    images.forEach(img => {
        if (img.complete) {
            incrementCounter();
        } else {
            img.addEventListener("load", incrementCounter);
            img.addEventListener("error", incrementCounter); // To account for failed loads
        }
    });

    function incrementCounter() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            showContent();
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    preloadImages();
});

document.addEventListener("DOMContentLoaded", function() {
    const heroContent = document.getElementById("Hero_content");
    setTimeout(function() {
        heroContent.classList.add("show-hero-content");
    }, 200); // 200ms delay
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

        if (window.innerWidth <= 400) { // Check if the viewport width is 400px or less
            backgroundSize = "1%"; // Zoom out the image
        }

        if (scrollRelativeToSection >= 0 && scrollRelativeToSection < changePoint1) {
            backgroundImage = "url('photos/Jtown1.jpg')";
        } else if (scrollRelativeToSection >= changePoint1 && scrollRelativeToSection < changePoint2) {
            backgroundImage = "url('photos/Jtown3.jpg')";
        } else if (scrollRelativeToSection >= changePoint2 && scrollRelativeToSection < changePoint3) {
            backgroundImage = "url('photos/BuddistTemple2.png')";
        } else {
            backgroundImage = "url('photos/christanchurch.png')";
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

document.addEventListener("DOMContentLoaded", function() {
    const sectionDivider = document.querySelector(".section-divider");

    function animateOnScroll() {
        const sectionTop = sectionDivider.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.9) { // Adjust for earlier/later animations
            sectionDivider.classList.add("animate");
            window.removeEventListener("scroll", animateOnScroll); // Trigger only once
        }
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Check immediately in case it's already in view
});




// Initialize
showSlides();
