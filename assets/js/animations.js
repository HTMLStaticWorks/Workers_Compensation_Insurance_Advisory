/**
 * WORKGUARD - Animations and Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initCounters();
    initParallax();
});

/* --- 1. Scroll Reveal --- */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.js-reveal');
    
    if(!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: Stop observing after reveal
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
}

/* --- 2. Animated Counters --- */
function initCounters() {
    const counters = document.querySelectorAll('.js-counter');
    
    if(!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 2000; // ms
    const stepTime = Math.abs(Math.floor(duration / target));
    let current = 0;
    
    const timer = setInterval(() => {
        current += Math.ceil(target / 50);
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = current + (el.getAttribute('data-suffix') || '');
    }, stepTime);
}

/* --- 3. Parallax Effect --- */
function initParallax() {
    const parallaxElements = document.querySelectorAll('.js-parallax');
    
    if(!parallaxElements.length) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}
