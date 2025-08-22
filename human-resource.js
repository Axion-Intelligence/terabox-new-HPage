// Human Resource Page Specific JavaScript

// ==================== Metric Counter Animation ====================
function animateMetrics() {
    const metrics = document.querySelectorAll('.metric-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metric = entry.target;
                const target = parseInt(metric.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    // Add appropriate suffix
                    if (metric.parentElement.querySelector('.metric-label').textContent.includes('率')) {
                        metric.textContent = Math.floor(current) + '%';
                    } else if (metric.parentElement.querySelector('.metric-label').textContent.includes('登録人材数')) {
                        metric.textContent = Math.floor(current).toLocaleString() + '+';
                    } else {
                        metric.textContent = Math.floor(current) + '+';
                    }
                }, 30);
                
                observer.unobserve(metric);
            }
        });
    }, observerOptions);
    
    metrics.forEach(metric => {
        observer.observe(metric);
    });
}

// ==================== Smooth Scroll for Anchor Links ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ==================== Header Scroll Effect ====================
function initHeaderEffect() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScrollY = 0;
    let ticking = false;
    
    function updateHeader() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.classList.add('scrolled');
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.5)';
        } else {
            header.classList.remove('scrolled');
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
}

// ==================== Service Cards Hover Effect ====================
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card, .model-card, .industry-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ==================== Tech Items Animation ====================
function initTechItems() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
        item.classList.add('fade-in-up');
    });
}

// ==================== Platform Features Animation ====================
function initPlatformFeatures() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    featureItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });
}

// ==================== Training Categories Accordion ====================
function initTrainingAccordion() {
    const categoryHeaders = document.querySelectorAll('.category-header');
    
    categoryHeaders.forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            const category = this.parentElement;
            const items = category.querySelector('.training-items');
            
            if (items.style.maxHeight) {
                items.style.maxHeight = null;
                items.style.opacity = '1';
            } else {
                items.style.maxHeight = items.scrollHeight + 'px';
                items.style.opacity = '1';
            }
        });
    });
}

// ==================== Client Stories Slider ====================
function initStoriesSlider() {
    const slides = document.querySelectorAll('.story-slide');
    let currentSlide = 0;
    
    // Hide all slides except first
    slides.forEach((slide, index) => {
        if (index !== 0) {
            slide.style.display = 'none';
        }
    });
    
    // Auto-advance slides
    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.display = 'grid';
            slides[currentSlide].style.animation = 'fadeInUp 0.8s ease-out';
        }, 5000);
    }
}

// ==================== Parallax Effect for Images ====================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.org-image-placeholder, .service-image-placeholder, .training-image-placeholder');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const speed = 0.5;
                const yPos = -(scrolled * speed) / 10;
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
}

// ==================== Language Switcher Integration ====================
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Remove active class from all buttons
            langButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Store language preference
            localStorage.setItem('preferred-language', lang);
            
            // Show notification
            showLanguageNotification(lang);
            
            // Here you would typically update the page content based on language
            // updatePageLanguage(lang);
        });
    });
}

// ==================== Language Notification ====================
function showLanguageNotification(lang) {
    const notifications = {
        'ja': '日本語に切り替えました',
        'en': 'Switched to English',
        'zh': '已切换到中文'
    };
    
    // Remove existing notification
    const existing = document.querySelector('.lang-notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'lang-notification';
    notification.textContent = notifications[lang];
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #9FD500, #7FB800);
        color: #000;
        padding: 12px 20px;
        border-radius: 6px;
        font-weight: bold;
        z-index: 10000;
        animation: slideInOut 3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ==================== Mobile Menu Toggle ====================
function initMobileMenu() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    
    if (!nav || !navLinks) return;
    
    // Check if mobile menu button already exists
    let mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!mobileMenuBtn) {
        mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.style.cssText = `
            display: none;
            background: none;
            border: none;
            color: #9FD500;
            font-size: 24px;
            cursor: pointer;
            padding: 8px;
            border-radius: 4px;
            transition: all 0.3s;
        `;
        
        nav.appendChild(mobileMenuBtn);
    }
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('mobile-active');
        const icon = this.querySelector('i');
        if (navLinks.classList.contains('mobile-active')) {
            icon.className = 'fas fa-times';
            navLinks.style.display = 'flex';
        } else {
            icon.className = 'fas fa-bars';
            navLinks.style.display = '';
        }
    });
    
    // Close menu when clicking on links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-active');
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            navLinks.style.display = '';
        });
    });
}

// ==================== Scroll Reveal Animation ====================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.stat-card, .cert-item, .training-item, .industry-card, .model-card');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        revealObserver.observe(element);
    });
}

// ==================== Page Load Animation ====================
function initPageLoadAnimation() {
    const heroContent = document.querySelector('.business-hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
}

// ==================== Initialize All Functions ====================
document.addEventListener('DOMContentLoaded', function() {
    initPageLoadAnimation();
    initSmoothScroll();
    initHeaderEffect();
    initServiceCards();
    initTechItems();
    initPlatformFeatures();
    initTrainingAccordion();
    initStoriesSlider();
    initParallax();
    initLanguageSwitcher();
    initMobileMenu();
    initScrollReveal();
    animateMetrics();
});

// ==================== Window Load Events ====================
window.addEventListener('load', function() {
    // Remove loader if exists
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }
});

// ==================== Window Resize Handler ====================
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Reinitialize mobile menu on resize
        initMobileMenu();
    }, 250);
});

// ==================== Export Functions for External Use ====================
window.HRPageFunctions = {
    animateMetrics,
    initSmoothScroll,
    initHeaderEffect,
    showLanguageNotification
};