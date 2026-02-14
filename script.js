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
   STARFIELD ANIMATION WITH CONSTELLATION LINES
======================================== */
class Starfield {
    constructor() {
        this.canvas = document.getElementById('starfield');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.numStars = 250; // Adjust for more/fewer stars
        this.connectionDistance = 175; // Maximum distance to draw lines between stars
        
        this.resize();
        this.createStars();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createStars() {
        this.stars = [];
        for (let i = 0; i < this.numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random(),
                twinkleSpeed: Math.random() * 0.01 + 0.002,
                twinkleDirection: Math.random() > 0.5 ? 1 : -1
            });
        }
    }
    
    drawConnections() {
        // Draw lines between nearby stars
        for (let i = 0; i < this.stars.length; i++) {
            for (let j = i + 1; j < this.stars.length; j++) {
                const star1 = this.stars[i];
                const star2 = this.stars[j];
                
                const dx = star1.x - star2.x;
                const dy = star1.y - star2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.connectionDistance) {
                    // Calculate opacity based on distance (closer = more opaque)
                    const lineOpacity = (1 - distance / this.connectionDistance) * 0.3;
                    
                    // Use average opacity of both stars
                    const avgStarOpacity = (star1.opacity + star2.opacity) / 2;
                    const finalOpacity = lineOpacity * avgStarOpacity;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(star1.x, star1.y);
                    this.ctx.lineTo(star2.x, star2.y);
                    this.ctx.strokeStyle = `rgba(235, 235, 235, ${finalOpacity})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    }
    
    drawStars() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw connections first (so stars appear on top)
        this.drawConnections();
        
        // Draw stars
        this.stars.forEach(star => {
            // Update twinkle
            star.opacity += star.twinkleSpeed * star.twinkleDirection;
            
            // Reverse direction at boundaries
            if (star.opacity >= 1 || star.opacity <= 0.1) {
                star.twinkleDirection *= -1;
            }
            
            // Draw star
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(235, 235, 235, ${star.opacity})`;
            this.ctx.fill();
        });
    }
    
    animate() {
        this.drawStars();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize starfield when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    new Starfield();
});
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
