// Complete trilingual translations for TERABOX website




// Enhanced particle creation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Enhanced smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = 80;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.boxShadow = 'none';
        }
    });
}

// Enhanced form handling with position application
function initFormHandling() {
    const form = document.getElementById('entryForm');
    const privacyConsent = document.getElementById('privacyConsent');
    const submitBtn = document.getElementById('submitBtn');
    const applyBtns = document.querySelectorAll('.apply-btn');

    // Handle position application buttons
    applyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const positionCard = this.closest('.position-card');
            const positionTitle = positionCard.querySelector('.position-title').textContent;
            
            // Scroll to form section
            const formSection = document.getElementById('entryForm');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
                
                // Pre-fill position in free text area
                const textarea = formSection.querySelector('.form-textarea');
                if (textarea) {
                    textarea.value = `応募職種: ${positionTitle}\n\n`;
                    textarea.focus();
                }
            }
            
            // Visual feedback
            this.style.background = 'linear-gradient(45deg, #7FB800, #9FD500)';
            this.textContent = '応募フォームへ移動しました';
            
            setTimeout(() => {
                this.style.background = 'linear-gradient(45deg, #9FD500, #7FB800)';
                this.textContent = '応募する';
            }, 2000);
        });
    });

    if (!form || !privacyConsent || !submitBtn) {
        return;
    }

    privacyConsent.addEventListener('change', function() {
        submitBtn.disabled = !this.checked;
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const requiredFields = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#ff6b6b';
            } else {
                field.style.borderColor = '#333';
            }
        });
        
        if (!privacyConsent.checked) {
            isValid = false;
            alert('個人情報の取り扱いについて同意していただく必要があります。');
            return;
        }
        
        if (isValid) {
            alert('エントリーフォームを送信しました。ありがとうございます。');
        } else {
            alert('必須項目をすべて入力してください。');
        }
    });

    // Real-time validation feedback
    const requiredInputs = form.querySelectorAll('input[required], textarea[required]');
    requiredInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = '#ff6b6b';
            } else {
                this.style.borderColor = '#333';
            }
        });

        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.style.borderColor = '#9FD500';
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    
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
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('mobile-active');
        const icon = this.querySelector('i');
        if (navLinks.classList.contains('mobile-active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
    
    // Close mobile menu when clicking on a link
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

// Enhanced performance optimization
let ticking = false;
function updateScrollEffects() {
    initHeaderScrollEffect();
    ticking = false;
}

// Add loading animation
function initLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const loaderContent = document.createElement('div');
    loaderContent.style.cssText = `
        color: #9FD500;
        font-size: 28px;
        font-weight: bold;
        animation: pulse 1.5s infinite;
        text-align: center;
    `;
    loaderContent.innerHTML = `
        <div style="margin-bottom: 20px;">TERABOX</div>
        <div style="width: 40px; height: 4px; background: #9FD500; margin: 0 auto; border-radius: 2px; animation: loading 2s infinite;"></div>
    `;
    
    loader.appendChild(loaderContent);
    document.body.appendChild(loader);
    
    // Add animations
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes loading {
            0% { width: 0%; }
            50% { width: 100%; }
            100% { width: 0%; }
        }
    `;
    document.head.appendChild(animationStyle);
    
    // Remove loader when page is loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(loader)) {
                    document.body.removeChild(loader);
                }
            }, 500);
        }, 800);
    });
}

// Add hover effects for cards
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.news-card, .business-card, .mv-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add parallax effect to hero section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    const cube = document.querySelector('.cube-container');
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (cube && scrolled < window.innerHeight) {
                cube.style.transform = `translateY(${rate}px)`;
            }
            
            ticking = true;
            requestAnimationFrame(() => {
                ticking = false;
            });
        }
    });
}

// 视频循环播放功能 - 添加到script.js文件中
function initVideoLoop() {
    const video = document.querySelector('.hero-video');
    
    if (video) {
        // 确保视频属性正确设置
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        
        console.log('Video element found, initializing loop functionality...');
        
        // 监听ended事件，手动重新播放（防止loop属性失效）
        video.addEventListener('ended', function() {
            console.log('Video ended, restarting...');
            video.currentTime = 0;
            video.play().catch(e => console.log('Manual restart failed:', e));
        });
        
        // 确保视频加载完成后开始播放
        video.addEventListener('loadeddata', function() {
            console.log('Video loaded, starting playback...');
            video.play().catch(e => console.log('Initial play failed:', e));
        });
        
        // 监听canplaythrough事件
        video.addEventListener('canplaythrough', function() {
            console.log('Video can play through, ensuring playback...');
            if (video.paused) {
                video.play().catch(e => console.log('Canplaythrough play failed:', e));
            }
        });
        
        // 处理页面可见性变化（标签页切换时）
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden && video.paused) {
                console.log('Page visible again, resuming video...');
                video.play().catch(e => console.log('Visibility resume failed:', e));
            }
        });
        
        // 定期检查视频状态，确保持续播放
        setInterval(function() {
            if (video.paused && !video.ended && video.readyState >= 3) {
                console.log('Video paused unexpectedly, resuming...');
                video.play().catch(e => console.log('Resume play failed:', e));
            }
        }, 3000);
        
        // 处理视频错误
        video.addEventListener('error', function(e) {
            console.error('Video error:', e);
            // 显示fallback内容
            const fallback = document.querySelector('.video-fallback');
            if (fallback) {
                fallback.style.display = 'flex';
                video.style.display = 'none';
            }
        });
        
        // 在用户首次交互后确保视频播放（解决自动播放限制）
        function ensureVideoPlaying() {
            if (video.paused && video.readyState >= 3) {
                console.log('User interaction detected, ensuring video plays...');
                video.play().catch(e => console.log('User interaction play failed:', e));
            }
        }
        
        // 监听用户交互事件
        ['click', 'scroll', 'keydown', 'touchstart'].forEach(event => {
            document.addEventListener(event, ensureVideoPlaying, { once: true });
        });
        
        // 当视频即将结束时，预准备重新播放
        video.addEventListener('timeupdate', function() {
            if (video.duration > 0) {
                const timeRemaining = video.duration - video.currentTime;
                // 在视频结束前1秒准备重新播放
                if (timeRemaining < 1 && timeRemaining > 0.5) {
                    console.log('Video almost ended, preparing to loop...');
                }
            }
        });
        
        // 强制循环：当视频接近结束时无缝重新开始
        video.addEventListener('timeupdate', function() {
            if (video.duration > 0) {
                const timeRemaining = video.duration - video.currentTime;
                // 在最后0.1秒时重新开始
                if (timeRemaining < 0.1) {
                    video.currentTime = 0;
                }
            }
        });
        
        // 处理网络状态变化
        window.addEventListener('online', function() {
            if (video.paused) {
                console.log('Network back online, resuming video...');
                video.play().catch(e => console.log('Network resume failed:', e));
            }
        });
        
        // 处理窗口焦点变化
        window.addEventListener('focus', function() {
            if (video.paused) {
                console.log('Window focused, resuming video...');
                video.play().catch(e => console.log('Focus resume failed:', e));
            }
        });
        
    } else {
        console.warn('Hero video element not found!');
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    initLoadingAnimation();
	initVideoLoop(); // 添加这一行
    initSmoothScrolling();
    initScrollAnimations();
    initHeaderScrollEffect();
    initFormHandling();
    initMobileMenu();
    initCardHoverEffects();
    initParallaxEffect();
});

// Initialize particles when page loads
window.addEventListener('load', function() {
    createParticles();
});

// Optimized scroll event handler
window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Add keyboard navigation support
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

// Add touch support for mobile devices
let touchStartY = 0;
document.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', function(e) {
    const touchY = e.touches[0].clientY;
    const touchDiff = touchStartY - touchY;
    
    // Add subtle parallax effect on mobile
    const hero = document.querySelector('.hero');
    if (hero && window.pageYOffset < window.innerHeight) {
        const rate = touchDiff * 0.1;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Enhanced accessibility
document.querySelectorAll('.cta-button, .submit-button').forEach(button => {
    button.addEventListener('focus', function() {
        this.style.outline = '2px solid #9FD500';
        this.style.outlineOffset = '2px';
    });
    
    button.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Add error handling
window.addEventListener('error', function(e) {
    console.warn('页面加载时出现错误:', e.error);
});