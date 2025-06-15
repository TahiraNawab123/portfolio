// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Skills tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content panes
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Function to switch tabs
    function switchTab(tabId) {
        // Hide all tab panes
        tabPanes.forEach(pane => {
            pane.style.display = 'none';
            pane.classList.remove('active');
        });

        // Remove active class from all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected tab pane and activate button
        const selectedPane = document.getElementById(tabId);
        const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);

        if (selectedPane && selectedButton) {
            selectedPane.style.display = 'block';
            selectedPane.classList.add('active');
            selectedButton.classList.add('active');
        }
    }

    // Add click event to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Initialize with first tab
    switchTab('technical-skills');
});

// Intersection Observer for subtle fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Subtle parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.2}px)`;
    });
}

// Aurora effect animation
const aurora = document.querySelector('.aurora');
if (aurora) {
    let angle = 0;
    function animateAurora() {
        angle += 0.5;
        aurora.style.transform = `rotate(${angle}deg) scale(1.2)`;
        requestAnimationFrame(animateAurora);
    }
    animateAurora();
}

// Star twinkling animation
function createStars() {
    const stars = document.querySelector('.stars');
    if (!stars) return;

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        stars.appendChild(star);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createStars();
});

// Add subtle hover effect for social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-3px)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease-out';
    
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
});

// Add CSS class for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Handle form submission (if you add a contact form later)
const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
};

// Add scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

// Add styles for scroll to top button
const scrollTopStyle = document.createElement('style');
scrollTopStyle.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--highlight-color);
        color: var(--primary-color);
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        transition: var(--transition);
        z-index: 1000;
    }

    .scroll-top-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(76, 201, 240, 0.3);
    }

    .scroll-top-btn.visible {
        display: flex;
    }
`;
document.head.appendChild(scrollTopStyle);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 