document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle Functionality ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    const menuIcon = document.querySelector('.mobile-menu-toggle i');

    // Check if all elements exist before adding the event listener
    if (menuToggle && nav && menuIcon) {
        menuToggle.addEventListener('click', function() {
            // Toggle the 'active' class on the navigation menu to show/hide it
            nav.classList.toggle('active');

            // Toggle the icon between hamburger (fa-bars) and close (fa-times)
            if (nav.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    }

    // --- Hero Banner Carousel (Swiper.js) ---
    const heroSwiper = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade', // Use fade effect for smooth background transitions
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 4000, // A slightly longer delay for the main banner
            disableOnInteraction: false,
        },
        pagination: {
            el: '.hero-pagination',
            clickable: true,
        },
    });

    // --- Featured Cars Carousel (Swiper.js) ---
    const swiper = new Swiper('.featured-cars-slider', {
        // Optional parameters
        loop: true,
        spaceBetween: 25, // Space between slides

        // Autoplay configuration
        autoplay: {
          delay: 3000, // Time in ms between slides (3 seconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
          pauseOnMouseEnter: true, // Pause autoplay on mouse hover
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // --- Scroll Animation for Car Cards ---
    const carCardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // When the element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    // Observe all car cards
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        carCardObserver.observe(card);
    });
});
