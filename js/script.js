
function navigateToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const targetPage = document.getElementById(pageId);
    
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}


document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-page]');
    if (link) {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        navigateToPage(pageId);
        
        
        document.querySelectorAll('.nav-links a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        link.classList.add('active');
    }
});


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});


function createGlitchEffect() {
    const logo = document.querySelector('.nav-logo span');
    const originalText = logo.textContent;
    
    setInterval(() => {
        if (Math.random() < 0.1) {
            const glitchText = originalText
                .split('')
                .map(char => Math.random() < 0.3 ? String.fromCharCode(Math.random() * 26 + 65) : char)
                .join('');
            
            logo.textContent = glitchText;
            
            setTimeout(() => {
                logo.textContent = originalText;
            }, 100);
        }
    }, 2000);
}


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


function observeElements() {
    const elements = document.querySelectorAll('.tool-card, .service-card, .feature-card, .section-title');
    elements.forEach(el => observer.observe(el));
}


window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1) || 'home';
    navigateToPage(hash);
});


document.addEventListener('DOMContentLoaded', () => {
    
    const hash = window.location.hash.slice(1) || 'home';
    navigateToPage(hash);
    
    
    createGlitchEffect();
    
    
    observeElements();
    
    
    document.body.classList.add('loaded');
    
    
    function forceStartMatrixRain() {
        let canvas = document.getElementById('matrix-rain');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'matrix-rain';
            document.body.appendChild(canvas);
            new MatrixRain();
        }
    }

    forceStartMatrixRain();

    
    setInterval(forceStartMatrixRain, 5000);
    
    
    const codeAccordion = document.querySelector('.code-accordion');
    const accordionHeader = document.querySelector('.code-accordion-header');

    if (accordionHeader) {
        accordionHeader.addEventListener('click', () => {
            codeAccordion.classList.toggle('active');
        });
    }
    
    
    const dropdowns = document.querySelectorAll('.dropdown-item');
    
    dropdowns.forEach(dropdown => {
        const header = dropdown.querySelector('.dropdown-header');
        const content = dropdown.querySelector('.dropdown-content');
        const text = dropdown.querySelector('.dropdown-text');
        const arrow = dropdown.querySelector('.dropdown-header i');
        
        
        content.style.height = '0';
        content.style.opacity = '0';
        text.style.transform = 'translateY(-10px)';
        text.style.opacity = '0';
        
        let isAnimating = false;
        
        function animateOpen() {
            if (isAnimating) return;
            isAnimating = true;
            
            
            dropdowns.forEach(other => {
                if (other !== dropdown && other.classList.contains('active')) {
                    animateClose(other);
                }
            });
            
            dropdown.classList.add('active');
            
            
            arrow.style.transform = 'rotate(180deg)';
            
            
            content.style.height = 'auto';
            const height = content.scrollHeight;
            content.style.height = '0';
            
            
            content.offsetHeight;
            
            
            content.style.height = height + 'px';
            content.style.opacity = '1';
            
            
            setTimeout(() => {
                text.style.transform = 'translateY(0)';
                text.style.opacity = '1';
                isAnimating = false;
            }, 150);
        }
        
        function animateClose(target = dropdown) {
            if (isAnimating) return;
            isAnimating = true;
            
            const targetHeader = target.querySelector('.dropdown-header i');
            const targetContent = target.querySelector('.dropdown-content');
            const targetText = target.querySelector('.dropdown-text');
            
            target.classList.remove('active');
            
            
            targetHeader.style.transform = 'rotate(0deg)';
            
            
            targetText.style.transform = 'translateY(-10px)';
            targetText.style.opacity = '0';
            
            
            setTimeout(() => {
                targetContent.style.height = '0';
                targetContent.style.opacity = '0';
                isAnimating = false;
            }, 150);
        }
        
        header.addEventListener('click', () => {
            if (dropdown.classList.contains('active')) {
                animateClose();
            } else {
                animateOpen();
            }
        });
    });
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
