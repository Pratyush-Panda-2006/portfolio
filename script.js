document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 2. HERO ANIMATIONS (On Page Load)
    const tl = gsap.timeline();
    tl.from(".logo", { y: -20, opacity: 0, duration: 1 })
      .from(".nav-links li", { y: -20, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.5")
      .from(".hero-left", { x: -50, opacity: 0, duration: 1 }, "-=0.6")
      // We animate the hero right side (Spline) slightly later
      .from(".hero-right", { x: 50, opacity: 0, duration: 1.2 }, "-=1");

    // 3. SCROLL ANIMATIONS (For Work, About, Contact)
    const sections = document.querySelectorAll('.section-padding');
    sections.forEach(section => {
        gsap.from(section.children, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Animation starts when section hits 80% of viewport
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        });
    });

    // 4. VANILLA TILT (3D Hover Effect for Cards)
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
        });
    }

    // 5. MOBILE MENU LOGIC
    // Closes the mobile menu when a link is clicked
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (menuToggle) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.checked = false; // Uncheck the box to close menu
            });
        });
    }
});