// Samsung S26 Ultra - One UI 8.5 JavaScript

// ============================================
// REAL-TIME CLOCK FOR STATUS BAR
// ============================================
function updateStatusTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeElement = document.getElementById('statusTime');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

setInterval(updateStatusTime, 1000);
updateStatusTime();

// ============================================
// BUTTON CLICK HANDLERS - PRESERVED LINKS
// ============================================

// Login button - redirects to in4.html
document.getElementById("bt1").addEventListener("click", () => {
    window.location.href = "in4.html";
});

// Sign up button - redirects to in3.html
document.getElementById("bt2").addEventListener("click", () => {
    window.location.href = "in3.html";
});

// Hero button - redirects to in4.html
document.getElementById("heroBtn").addEventListener("click", () => {
    window.location.href = "in4.html";
});

// ============================================
// NAVIGATION INTERACTIONS
// ============================================
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

document.querySelectorAll('.bottom-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.bottom-nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// ============================================
// SAMSUNG BUTTON HOVER EFFECTS
// ============================================
const samsungButtons = document.querySelectorAll('.samsung-btn');

samsungButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// FEATURE CARD INTERACTIONS
// ============================================
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
        // Add click ripple effect
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});

// ============================================
// SPLASH SCREEN HIDE AFTER ANIMATION
// ============================================
setTimeout(() => {
    const splash = document.getElementById('samsungSplash');
    if (splash) {
        splash.style.display = 'none';
    }
}, 4000);

// ============================================
// TOUCH FEEDBACK FOR MOBILE
// ============================================
document.querySelectorAll('.samsung-card, .samsung-btn, .bottom-nav-item, .feature-card').forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.98)';
    });
    
    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

console.log('Samsung S26 Ultra - One UI 8.5 Loaded Successfully! 📱');
console.log('Features: Real-time clock, Button links preserved (in3.html, in4.html), Touch feedback');
