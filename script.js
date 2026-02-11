/* ========================================
   DYNAMIC COPYRIGHT YEAR
======================================== */
// Update footer year automatically
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

/* ========================================
   SMOOTH SCROLLING FOR NAVIGATION
======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80; // Height of fixed header
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
        }
    });
});

/* ========================================
   DISABLE RIGHT-CLICK (Image Protection)
======================================== */
// Prevent context menu on images and the entire page
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Prevent dragging images
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Prevent selecting images (additional protection)
document.addEventListener('selectstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

/* ========================================
   VIDEO OPTIMIZATION
======================================== */
// Ensure video plays on mobile devices
const video = document.querySelector('.video-background video');
if (video) {
    video.addEventListener('loadedmetadata', function() {
        this.play().catch(function(error) {
            console.log('Video autoplay prevented:', error);
        });
    });
    
    // Reduce playback rate for smoother performance (optional)
    video.playbackRate = 0.8;
}

/* ========================================
   NAVBAR SCROLL EFFECT (Optional Enhancement)
======================================== */
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
