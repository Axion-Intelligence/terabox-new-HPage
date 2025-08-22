// Complete JavaScript for updated TERABOX website

// ==================== 数字动画效果 ====================
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');
    
    numbers.forEach(number => {
        const text = number.textContent;
        const target = parseInt(text);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                number.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = target + '+';
            }
        };
        
        // 使用Intersection Observer触发动画
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateNumber();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(number);
    });
}

// ==================== 成就标签动画 ====================
function initAchievementTags() {
    const tags = document.querySelectorAll('.achievement-tags .tag');
    
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 4px 8px rgba(159, 213, 0, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// ==================== 粒子效果创建 ====================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
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

// ==================== 平滑滚动 - 更新包含新锚点 ====================
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

// ==================== 滚动动画 ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // 对于特定元素添加特殊动画
                if (entry.target.classList.contains('hero-stats')) {
                    animateNumbers();
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// ==================== 头部滚动效果 - 优化版 ====================
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

// ==================== 表单处理 - 保持原有功能 ====================
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

// ==================== 移动端菜单 - 优化以适应更多导航项 ====================
function initMobileMenu() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    
    if (!nav || !navLinks) return;
    
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
            // 对于较多的导航项，添加滚动支持
            navLinks.style.maxHeight = '70vh';
            navLinks.style.overflowY = 'auto';
        } else {
            icon.className = 'fas fa-bars';
            navLinks.style.maxHeight = '';
            navLinks.style.overflowY = '';
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

// ==================== 加载动画 ====================
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

// ==================== 卡片悬停效果 ====================
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.news-card, .business-card, .mv-card, .case-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ==================== 视差效果 ====================
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    const videoContainer = document.querySelector('.video-container');
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            const scrolled = window.pageYOffset;
            
            if (scrolled < window.innerHeight) {
                const rate = scrolled * -0.5;
                if (videoContainer) {
                    videoContainer.style.transform = `translateY(${rate}px)`;
                }
            }
            
            ticking = true;
            requestAnimationFrame(() => {
                ticking = false;
            });
        }
    });
}

// ==================== 视频循环播放 ====================
function initVideoLoop() {
    const video = document.querySelector('.hero-video');
    
    if (video) {
        // 确保视频属性正确设置
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        
        // 监听ended事件，手动重新播放（防止loop属性失效）
        video.addEventListener('ended', function() {
            video.currentTime = 0;
            video.play().catch(e => console.log('Manual restart failed:', e));
        });
        
        // 确保视频加载完成后开始播放
        video.addEventListener('loadeddata', function() {
            video.play().catch(e => console.log('Initial play failed:', e));
        });
        
        // 处理页面可见性变化（标签页切换时）
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden && video.paused) {
                video.play().catch(e => console.log('Visibility resume failed:', e));
            }
        });
        
        // 定期检查视频状态，确保持续播放
        setInterval(function() {
            if (video.paused && !video.ended && video.readyState >= 3) {
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
    }
}

// ==================== 新增：强项图标动画 ====================
function initStrengthIcons() {
    const icons = document.querySelectorAll('#strength .news-image i');
    
    icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(icon);
    });
}

// ==================== 新增：案例卡片特效 ====================
function initCaseCards() {
    const caseCards = document.querySelectorAll('#cases .news-card');
    
    caseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#9FD500';
            const icon = this.querySelector('.news-image i');
            if (icon) {
                icon.style.transform = 'rotate(360deg) scale(1.2)';
                icon.style.transition = 'transform 0.5s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(159, 213, 0, 0.1)';
            const icon = this.querySelector('.news-image i');
            if (icon) {
                icon.style.transform = 'rotate(0) scale(1)';
            }
        });
    });
}

// ==================== 初始化所有功能 ====================
document.addEventListener('DOMContentLoaded', function() {
    initLoadingAnimation();
    initVideoLoop();
    initSmoothScrolling();
    initScrollAnimations();
    initHeaderScrollEffect();
    initFormHandling();
    initMobileMenu();
    initCardHoverEffects();
    initParallaxEffect();
    
    // 新增的初始化
    animateNumbers();
    initAchievementTags();
    initStrengthIcons();
    initCaseCards();
	initCompanyTabs(); // 添加这行
	initCertBadges(); // 添加这行
});

// ==================== 页面加载完成后 ====================
window.addEventListener('load', function() {
    createParticles();
    
    // 触发所有动画
    document.querySelectorAll('.animate').forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 100);
    });
});

// ==================== 优化的滚动事件处理 ====================
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(function() {
        // 滚动相关的更新
    });
});

// ==================== 键盘导航支持 ====================
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

// ==================== 触摸支持 ====================
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

// ==================== 增强的无障碍性 ====================
document.querySelectorAll('.cta-button, .submit-button, .apply-btn').forEach(button => {
    button.addEventListener('focus', function() {
        this.style.outline = '2px solid #9FD500';
        this.style.outlineOffset = '2px';
    });
    
    button.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// ==================== 错误处理 ====================
window.addEventListener('error', function(e) {
    console.warn('页面加载时出现错误:', e.error);
});

// ==================== 性能监控 ====================
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
        }, 0);
    });
}

// ==================== 公司信息标签切换 ====================
function initCompanyTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const headquartersInfo = document.getElementById('headquarters-info');
    const subsidiaryInfo = document.getElementById('subsidiary-info');
    
    if (!tabButtons.length || !headquartersInfo || !subsidiaryInfo) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有active类
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 添加active类到当前按钮
            this.classList.add('active');
            
            // 切换显示内容
            if (this.dataset.tab === 'headquarters') {
                headquartersInfo.style.display = 'block';
                subsidiaryInfo.style.display = 'none';
                
                // 触发动画
                headquartersInfo.style.animation = 'fadeIn 0.5s ease';
            } else {
                headquartersInfo.style.display = 'none';
                subsidiaryInfo.style.display = 'block';
                
                // 触发动画
                subsidiaryInfo.style.animation = 'fadeIn 0.5s ease';
            }
        });
    });
    
    // 添加键盘支持
    tabButtons.forEach((button, index) => {
        button.setAttribute('tabindex', '0');
        button.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// ==================== 认证徽章动画 ====================
function initCertBadges() {
    const badges = document.querySelectorAll('.cert-badge');
    
    badges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.1}s`;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(badge);
    });
}