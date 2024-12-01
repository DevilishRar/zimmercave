
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100; 
    const duration = 2000; 
    const stepTime = duration / (target / increment);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}


const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statsNumbers = entry.target.querySelectorAll('.stat-number');
            statsNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });


const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}


const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.2 });


document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});


document.querySelectorAll('.about-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover');
        const icon = card.querySelector('.card-icon');
        icon.classList.add('pulse');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
        const icon = card.querySelector('.card-icon');
        icon.classList.remove('pulse');
    });
});


const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});


menuOverlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    menuOverlay.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
});


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.about-hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});
