document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // 1. SCROLL PROGRESS BAR — Dynamic Color
    // =============================================
    const scrollBar = document.getElementById('scroll-progress');
    const themeColors = [
        { stop: 0, color: '#fb923c' }, // orange
        { stop: 25, color: '#d4a733' }, // gold
        { stop: 50, color: '#60a5fa' }, // blue
        { stop: 75, color: '#ef4444' }, // red
        { stop: 100, color: '#f78da7' }  // pink
    ];

    function getScrollColor(progress) {
        // Find the two color stops we're between
        let lower = themeColors[0], upper = themeColors[themeColors.length - 1];
        for (let i = 0; i < themeColors.length - 1; i++) {
            if (progress >= themeColors[i].stop && progress <= themeColors[i + 1].stop) {
                lower = themeColors[i];
                upper = themeColors[i + 1];
                break;
            }
        }
        // Interpolate between two hex colors
        const range = upper.stop - lower.stop || 1;
        const t = (progress - lower.stop) / range;
        const lc = hexToRgb(lower.color), uc = hexToRgb(upper.color);
        const r = Math.round(lc.r + (uc.r - lc.r) * t);
        const g = Math.round(lc.g + (uc.g - lc.g) * t);
        const b = Math.round(lc.b + (uc.b - lc.b) * t);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollBar.style.width = progress + '%';
        scrollBar.style.background = getScrollColor(progress);
    });

    // =============================================
    // 2. TYPEWRITER EFFECT
    // =============================================
    const typedEl = document.getElementById('typed-text');
    const roles = [
        'Full-Stack Developer',
        'AI/ML Engineer',
        'Open Source Contributor',
        'Problem Solver'
    ];
    let roleIdx = 0, charIdx = 0, isDeleting = false;

    function type() {
        const currentRole = roles[roleIdx];
        if (isDeleting) {
            typedEl.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typedEl.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
        }

        let delay = isDeleting ? 60 : 110;

        if (!isDeleting && charIdx === currentRole.length) {
            delay = 1800;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            delay = 400;
        }
        setTimeout(type, delay);
    }
    type();

    // =============================================
    // 3. SCROLL REVEAL (IntersectionObserver)
    // =============================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // =============================================
    // 5. MOBILE MENU — Close on nav link click
    // =============================================
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (menuToggle) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.checked = false;
            });
        });
    }

    // =============================================
    // 6. SMOOTH SCROLL for nav links
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // =============================================
    // 7. CARD HOVER JIGGLE on interactive cards
    // =============================================
    const interactiveCards = document.querySelectorAll('.feature-card, .timeline-content, .polaroid');
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });

    // =============================================
    // 8. GITHUB STATS (Fetch API)
    // =============================================
    const username = 'Pratyush-Panda-2006';
    const repoElement = document.getElementById('repo-count');

    if (repoElement) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                animateValue(repoElement, 0, data.public_repos, 2000);
            })
            .catch(error => console.error('Error fetching GitHub stats:', error));
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // =============================================
    // 9. NAVBAR SHADOW ON SCROLL
    // =============================================
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '6px 6px 0px 0px #1a1a1a';
        } else {
            nav.style.boxShadow = '6px 6px 0px 0px #1a1a1a';
        }
    });

    // =============================================
    // 10. STAGGER REVEAL for project items
    // =============================================
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // =============================================
    // 11. CONTACT FORM — mailto handler
    // =============================================

});
