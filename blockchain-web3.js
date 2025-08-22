// blockchain-web3.js - TERABOX Blockchain & Web3 Page Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initTimelineAnimation();
    initProjectCards();
    initTechStackFilter();
    initBlockchainNetwork();
    initStatsCounter();
    initAchievementBadges();
    initSmoothScroll();
});

// Timeline Animation with Intersection Observer
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate timeline tech items
                const techItems = entry.target.querySelectorAll('.timeline-tech li');
                techItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.animation = 'fadeInUp 0.5s ease forwards';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// Project Cards Interactive Features
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 30px rgba(0,123,255,0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 3px 15px rgba(0,0,0,0.1)';
        });
        
        // Add click to expand functionality
        const header = card.querySelector('.project-header');
        if (header) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                const content = card.querySelector('.project-content');
                content.classList.toggle('expanded');
                
                // Animate the expansion
                if (content.classList.contains('expanded')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = null;
                }
            });
        }
    });
    
    // Special animation for award-winning project
    const highlightCard = document.querySelector('.project-card.highlight');
    if (highlightCard) {
        setInterval(() => {
            highlightCard.classList.add('pulse');
            setTimeout(() => {
                highlightCard.classList.remove('pulse');
            }, 2000);
        }, 5000);
    }
}

// Technology Stack Filter
function initTechStackFilter() {
    const techCategories = document.querySelectorAll('.expertise-category');
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Create filter buttons
    const filterContainer = document.createElement('div');
    filterContainer.className = 'tech-filter-container';
    filterContainer.innerHTML = `
        <div class="tech-filters">
            <button class="filter-btn active" data-filter="all">すべて</button>
            <button class="filter-btn" data-filter="defi">DeFi</button>
            <button class="filter-btn" data-filter="smart-contract">スマートコントラクト</button>
            <button class="filter-btn" data-filter="enterprise">エンタープライズ</button>
            <button class="filter-btn" data-filter="infrastructure">インフラ</button>
        </div>
    `;
    
    const servicesSection = document.querySelector('.services-overview .container');
    if (servicesSection) {
        servicesSection.insertBefore(filterContainer, servicesSection.querySelector('.services-grid'));
        
        // Add filter functionality
        const filterButtons = filterContainer.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter cards
                const filter = this.dataset.filter;
                serviceCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        // Add data attributes to cards for filtering
                        const cardCategories = card.dataset.categories || '';
                        if (cardCategories.includes(filter)) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 10);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }
    
    // Add data attributes to service cards
    if (serviceCards[0]) serviceCards[0].dataset.categories = 'defi infrastructure';
    if (serviceCards[1]) serviceCards[1].dataset.categories = 'smart-contract';
    if (serviceCards[2]) serviceCards[2].dataset.categories = 'smart-contract defi';
    if (serviceCards[3]) serviceCards[3].dataset.categories = 'enterprise infrastructure';
    if (serviceCards[4]) serviceCards[4].dataset.categories = 'infrastructure';
    if (serviceCards[5]) serviceCards[5].dataset.categories = 'infrastructure enterprise';
}

// Blockchain Network Visualization
function initBlockchainNetwork() {
    const blockchainItems = document.querySelectorAll('.blockchain-item');
    
    // Create connecting lines between blockchain items
    const container = document.querySelector('.blockchain-grid');
    if (container) {
        // Add network effect background
        const networkCanvas = document.createElement('canvas');
        networkCanvas.className = 'network-canvas';
        container.appendChild(networkCanvas);
        
        // Simple particle network effect
        const ctx = networkCanvas.getContext('2d');
        networkCanvas.width = container.offsetWidth;
        networkCanvas.height = container.offsetHeight;
        
        const particles = [];
        const particleCount = 30;
        
        class Particle {
            constructor() {
                this.x = Math.random() * networkCanvas.width;
                this.y = Math.random() * networkCanvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                if (this.x < 0 || this.x > networkCanvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > networkCanvas.height) this.vy *= -1;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 123, 255, 0.3)';
                ctx.fill();
            }
        }
        
        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        function animateNetwork() {
            ctx.clearRect(0, 0, networkCanvas.width, networkCanvas.height);
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 123, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(animateNetwork);
        }
        
        animateNetwork();
    }
    
    // Animate blockchain items on hover
    blockchainItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('active');
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
}

// Statistics Counter Animation
function initStatsCounter() {
    const stats = [
        { element: '.stat-number', target: 9, suffix: '+', duration: 2000 },
        { element: '.stat-number:nth-of-type(2)', target: 20, suffix: '+', duration: 2500 },
        { element: '.stat-number:nth-of-type(3)', target: 6, suffix: '+', duration: 1500 }
    ];
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                
                const statElements = entry.target.querySelectorAll('.stat-number');
                statElements.forEach((el, index) => {
                    const target = parseInt(el.textContent);
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                            el.textContent = target + '+';
                        } else {
                            el.textContent = Math.floor(current);
                        }
                    }, 16);
                });
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.cta-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Achievement Badges Animation
function initAchievementBadges() {
    const badges = document.querySelectorAll('.achievement-badge');
    
    badges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            badge.style.transition = 'all 0.5s ease';
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
    
    // Add hover effect
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(-2deg)';
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
}

// Smooth Scroll for Navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Tech Tag Interaction
document.addEventListener('DOMContentLoaded', function() {
    const techTags = document.querySelectorAll('.tech-tag');
    
    techTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Toggle selection
            this.classList.toggle('selected');
            
            // Show related information
            const tech = this.textContent.trim();
            showTechInfo(tech);
        });
    });
});

// Show Technology Information Modal
function showTechInfo(tech) {
    const techInfo = {
        'Go (6年)': '6年間のGo言語開発経験。マイクロサービス、ブロックチェーンノード、高性能APIの実装。',
        'Java (10年)': '10年以上のJava開発経験。Spring Framework、エンタープライズアプリケーション開発。',
        'Solidity (6年)': 'スマートコントラクト開発6年。DeFiプロトコル、NFT、DAOの実装経験豊富。',
        'Ethereum': 'Ethereum上でのDApp開発、スマートコントラクト監査、ガス最適化の専門知識。',
        'Hyperledger Fabric': '銀行グレードのプライベートブロックチェーン実装。上海銀行プロジェクトで実績。',
        'Cosmos SDK': 'Cosmos国際ハッカソン2020二等賞。クロスチェーン技術の先駆的実装。'
    };
    
    if (techInfo[tech]) {
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'tech-tooltip';
        tooltip.textContent = techInfo[tech];
        tooltip.style.position = 'fixed';
        tooltip.style.top = '50%';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translate(-50%, -50%)';
        tooltip.style.zIndex = '9999';
        
        document.body.appendChild(tooltip);
        
        setTimeout(() => {
            tooltip.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            tooltip.classList.remove('show');
            setTimeout(() => {
                tooltip.remove();
            }, 300);
        }, 3000);
    }
}

// Copy to Clipboard for Project Links
document.querySelectorAll('.project-links a').forEach(link => {
    link.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        const url = this.href;
        navigator.clipboard.writeText(url).then(() => {
            // Show copied notification
            const notification = document.createElement('div');
            notification.className = 'copy-notification';
            notification.textContent = 'リンクをコピーしました！';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 2000);
        });
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.business-hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        
        const heroContent = hero.querySelector('.business-hero-content');
        if (heroContent) {
            heroContent.style.opacity = 1 - (scrolled * 0.002);
        }
    }
});

// Add Loading Animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger entrance animations
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animated');
        }, index * 100);
    });
});