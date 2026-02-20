/* ========================================
   DYNAMIC COPYRIGHT YEAR
======================================== */
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

/* ========================================
   DISABLE RIGHT-CLICK (Image Protection)
======================================== */
// Prevent context menu
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

// Prevent selecting images
document.addEventListener('selectstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});
