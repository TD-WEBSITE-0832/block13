// Xiaomi HyperOS 2.0 JavaScript

// ============================================
// REAL-TIME CLOCK
// ============================================
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeElement = document.getElementById('statusTime');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

setInterval(updateTime, 1000);
updateTime();

// ============================================
// BUTTON CLICK HANDLERS
// ============================================
document.getElementById("btt").addEventListener("click", () => {
    window.location.href = "https://ripen-brave-07788039.figma.site/";
});

document.getElementById("btt1").addEventListener("click", () => {
    window.location.href = "https://grant-enter-31728490.figma.site/";
});

document.getElementById("btt2").addEventListener("click", () => {
    window.location.href = "https://fizzy-tree-47741583.figma.site/#";
});

document.getElementById("btt3").addEventListener("click", () => {
    window.location.href = "in.html";
});

document.getElementById("btt4").addEventListener("click", () => {
    window.location.href = "in2.html";
});

document.getElementById("btt5").addEventListener("click", () => {
    window.location.href = "in1.html";
});

// ============================================
// SPLASH SCREEN HIDE
// ============================================
setTimeout(() => {
    const splash = document.getElementById('xiaomiSplash');
    if (splash) {
        splash.style.display = 'none';
    }
}, 3000);

// ============================================
// TOUCH FEEDBACK
// ============================================
document.querySelectorAll('.xiaomi-btn').forEach(btn => {
    btn.addEventListener('touchstart', () => {
        btn.style.transform = 'scale(0.95)';
    });
    
    btn.addEventListener('touchend', () => {
        btn.style.transform = '';
    });
});

console.log('Xiaomi HyperOS 2.0 Loaded! 🟠');
