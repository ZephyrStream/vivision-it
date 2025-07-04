document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    const heroTitleSpans = document.querySelectorAll('.hero-title span');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    gsap.to(heroTitleSpans, {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
    });

    gsap.to(heroSubtitle, {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        delay: 0.5
    });

    // Project Cards Animation
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%', // Animate when 85% of the card is in view
                toggleActions: 'play none none none'
            }
        });
    });
});
