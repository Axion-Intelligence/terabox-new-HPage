// AI Solution Page Specific JavaScript
// Combines necessary functions from language-switcher.js and script.js

// ==================== Language Switcher Module ====================
const LanguageSwitcher = (function() {
    // Translations specific to AI Solution page
    const translations = {
        ja: {
            // Navigation
            'nav-news': 'お知らせ',
            'nav-company': '会社概要',
            'nav-message': '代表挨拶',
            'nav-business': '事業内容',
            'nav-recruit': '採用情報',
            'nav-access': 'アクセス',
            'nav-contact': 'お問い合わせ',
            
            // AI Solution specific content would go here
            // Add translations for AI solution page elements
        },
        en: {
            // Navigation
            'nav-news': 'News',
            'nav-company': 'Company',
            'nav-message': 'CEO Message',
            'nav-business': 'Business',
            'nav-recruit': 'Careers',
            'nav-access': 'Access',
            'nav-contact': 'Contact',
            
            // AI Solution specific translations
        },
        zh: {
            // Navigation
            'nav-news': '新闻',
            'nav-company': '公司概况',
            'nav-message': '总裁致辞',
            'nav-business': '业务内容',
            'nav-recruit': '招聘信息',
            'nav-access': '交通指南',
            'nav-contact': '联系我们',
            
            // AI Solution specific translations
        }
    };

    function switchLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language "${lang}" not supported. Defaulting to Japanese.`);
            lang = 'ja';
        }

        // Update all elements with data-lang-key attribute
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Store selected language
        try {
            localStorage.setItem('terabox-language', lang);
        } catch (e) {
            console.warn('Unable to save language preference:', e);
        }

        showLanguageNotification(lang);
    }

    function showLanguageNotification(lang) {
        const langText = {
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
        notification.textContent = langText[lang];
        
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
            animation: slideInFade 3s ease-out forwards;
            box-shadow: 0 4px 15px rgba(159, 213, 0, 0.3);
            font-size: 14px;
            min-width: 180px;
            text-align: center;
        `;

        document.body.appendChild(notification);

        // Add animation styles if not present
        if (!document.querySelector('#lang-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'lang-notification-styles';
            style.textContent = `
                @keyframes slideInFade {
                    0% { transform: translateX(100%); opacity: 0; }
                    15% { transform: translateX(0); opacity: 1; }
                    85% { transform: translateX(0); opacity: 1; }
                    100% { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }

    function init() {
        // Load saved language preference
        let savedLang = 'ja';
        try {
            savedLang = localStorage.getItem('terabox-language') || 'ja';
        } catch (e) {
            console.warn('Unable to access localStorage:', e);
        }

        // Apply saved language
        if (translations[savedLang]) {
            switchLanguage(savedLang);
        }

        // Add event listeners to language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                if (lang && translations[lang]) {
                    switchLanguage(lang);
                }
            });

            // Keyboard accessibility
            btn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }

    return {
        init: init,
        switchLanguage: switchLanguage
    };
})();

// ==================== Core Functionality Module ====================
const AIPageCore = (function() {
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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

    // Header scroll effect
    function initHeaderScrollEffect() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        let lastScrollY = 0;
        let ticking = false;
        
        function updateHeader() {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                header.classList.add('scrolled');
                header.style.background = 'rgba(0, 0, 0, 0.95)';
                header.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.3)';
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

    // Scroll animations for page elements
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add staggered animation for service cards
                    if (entry.target.classList.contains('service-card')) {
                        const cards = document.querySelectorAll('.service-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, index * 100);
                        });
                    }
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll('.services-grid, .tech-grid, .cases-grid').forEach(el => {
            observer.observe(el);
        });
    }

    // Service card hover effects
    function initServiceCardEffects() {
        const cards = document.querySelectorAll('.service-card, .case-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 20px 40px rgba(159, 213, 0, 0.2)';
                
                // Animate icon
                const icon = this.querySelector('.service-icon i, .case-image i');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                
                // Reset icon
                const icon = this.querySelector('.service-icon i, .case-image i');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                }
            });
        });
    }

    // Technology stack animations
    function initTechStackAnimations() {
        const techItems = document.querySelectorAll('.tech-item');
        
        techItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.background = 'linear-gradient(45deg, #9FD500, #7FB800)';
                this.style.color = '#000';
                this.style.transform = 'scale(1.05)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.background = 'rgba(159, 213, 0, 0.1)';
                this.style.color = '#9FD500';
                this.style.transform = 'scale(1)';
            });
        });
    }

    // Mobile menu functionality
    function initMobileMenu() {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (!nav || !navLinks) return;
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
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
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-active');
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('mobile-active')) {
                icon.className = 'fas fa-times';
                navLinks.style.maxHeight = '70vh';
                navLinks.style.overflowY = 'auto';
            } else {
                icon.className = 'fas fa-bars';
                navLinks.style.maxHeight = '';
                navLinks.style.overflowY = '';
            }
        });
        
        // Close menu when clicking on links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-active');
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            });
        });
        
        // Add mobile styles
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: block !important;
                }
                
                .nav-links {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(0, 0, 0, 0.98);
                    flex-direction: column;
                    padding: 20px;
                    gap: 15px;
                    border-top: 1px solid #333;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                    z-index: 999;
                }
                
                .nav-links.mobile-active {
                    display: flex !important;
                }
                
                .nav-links a {
                    padding: 12px 0;
                    border-bottom: 1px solid #333;
                    text-align: center;
                }
                
                .nav-links a:last-child {
                    border-bottom: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Enhanced accessibility
    function initAccessibility() {
        // Add focus styles for buttons
        document.querySelectorAll('.cta-button, .lang-btn').forEach(button => {
            button.addEventListener('focus', function() {
                this.style.outline = '2px solid #9FD500';
                this.style.outlineOffset = '2px';
            });
            
            button.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });

        // Escape key to close mobile menu
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const mobileMenu = document.querySelector('.nav-links.mobile-active');
                if (mobileMenu) {
                    mobileMenu.classList.remove('mobile-active');
                    const menuBtn = document.querySelector('.mobile-menu-btn i');
                    if (menuBtn) menuBtn.className = 'fas fa-bars';
                }
            }
        });
    }

    // Initialize all modules
    function init() {
        initSmoothScrolling();
        initHeaderScrollEffect();
        initScrollAnimations();
        initServiceCardEffects();
        initTechStackAnimations();
        initMobileMenu();
        initAccessibility();
    }

    return {
        init: init
    };
})();

// ==================== Initialize Everything on DOM Ready ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language switcher
    LanguageSwitcher.init();
    
    // Initialize core functionality
    AIPageCore.init();
    
    // Add page-specific animations
    setTimeout(() => {
        document.querySelectorAll('.business-hero-content, .services-overview, .technology-section, .case-studies').forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 300);
});

// ==================== Performance Monitoring ====================
window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        setTimeout(function() {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log('AI Solution page load time:', loadTime + 'ms');
        }, 0);
    }
});