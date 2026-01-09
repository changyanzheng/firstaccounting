document.addEventListener('DOMContentLoaded', function() {
    
    // 1. We look for YOUR specific button name: 'mobile-menu-btn'
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');

    // 2. Safety Check: We only run if the button actually exists
    if (mobileBtn && nav) {
        
        // 3. The Click Action
        mobileBtn.addEventListener('click', function() {
            // This adds the class that CSS uses to show the menu
            nav.classList.toggle('active');
            console.log("Menu button clicked!"); 
        });
    }
    
    // 4. Fade-in Animation (Optimized for your real elements)
    const fadeEls = document.querySelectorAll('.service-card, .hero-inner, .section-title');
    fadeEls.forEach((el, idx) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 100 * idx);
    });
});

