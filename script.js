document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // 1. SCROLL PROGRESS BAR
    // =============================================
    const scrollBar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollBar.style.width = progress + '%';
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
            delay = 1800; // pause at end
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
    // 3. GSAP + ScrollTrigger
    // =============================================
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const tl = gsap.timeline();
    tl.from(".logo", { y: -20, opacity: 0, duration: 1 })
        .from(".nav-links li", { y: -20, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.5")
        .from(".hero-left", { x: -50, opacity: 0, duration: 1 }, "-=0.6");

    // Section fade-ins
    const sections = document.querySelectorAll('.section-padding');
    sections.forEach(section => {
        gsap.from(section.children, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        });
    });

    // Timeline items stagger
    gsap.from(".timeline-item", {
        scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18
    });

    // =============================================
    // 4. SKILL BAR FILL (IntersectionObserver)
    // =============================================
    const skillSection = document.getElementById('skills');
    if (skillSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
                        const target = bar.getAttribute('data-width');
                        bar.style.width = target + '%';
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        observer.observe(skillSection);
    }

    // =============================================
    // 5. VANILLA TILT
    // =============================================
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
        });
    }

    // =============================================
    // 6. MOBILE MENU — Close on nav link click
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
    // 7. GITHUB STATS (Fetch API)
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
});
