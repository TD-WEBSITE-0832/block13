// iOS 26 App - Currency Translator + Mobile Legends Hero Database + Real-time Clock

// ============================================
// REAL-TIME DATE/TIME DISPLAY
// ============================================
function updateDateTime() {
  const now = new Date();
  
  // Get time components
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Get date components
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const day = days[now.getDay()];
  
  // Update DOM elements
  const timeElement = document.getElementById('currentTime');
  const secondsElement = document.getElementById('currentSeconds');
  const monthElement = document.getElementById('currentMonth');
  const yearElement = document.getElementById('currentYear');
  const dayElement = document.getElementById('currentDay');
  const statusTimeElement = document.getElementById('statusTime');
  
  if (timeElement) timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  if (secondsElement) secondsElement.textContent = seconds;
  if (monthElement) monthElement.textContent = month;
  if (yearElement) yearElement.textContent = year;
  if (dayElement) dayElement.textContent = day;
  if (statusTimeElement) statusTimeElement.textContent = `${hours}:${minutes}`;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call

// ============================================
// CURRENCY TRANSLATOR
// ============================================

// Exchange rates (base: USD)
const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 150.25,
  UZS: 12650,
  RUB: 92.50,
  CNY: 7.24,
  KRW: 1330.50,
  TRY: 31.20,
  INR: 83.40
};

const currencyNames = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  UZS: 'Uzbekistani Som',
  RUB: 'Russian Ruble',
  CNY: 'Chinese Yuan',
  KRW: 'South Korean Won',
  TRY: 'Turkish Lira',
  INR: 'Indian Rupee'
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById('amountInput').value) || 0;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  
  // Convert to USD first, then to target currency
  const amountInUSD = amount / exchangeRates[fromCurrency];
  const result = amountInUSD * exchangeRates[toCurrency];
  
  // Format result based on currency
  let formattedResult;
  if (toCurrency === 'UZS' || toCurrency === 'JPY' || toCurrency === 'KRW' || toCurrency === 'RUB' || toCurrency === 'INR') {
    formattedResult = result.toLocaleString('en-US', { maximumFractionDigits: 0 });
  } else {
    formattedResult = result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  
  document.getElementById('resultOutput').value = formattedResult;
  
  // Update exchange rate display
  const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
  let formattedRate;
  if (toCurrency === 'UZS' || toCurrency === 'JPY' || toCurrency === 'KRW' || toCurrency === 'RUB' || toCurrency === 'INR') {
    formattedRate = rate.toLocaleString('en-US', { maximumFractionDigits: 0 });
  } else {
    formattedRate = rate.toFixed(4);
  }
  document.getElementById('exchangeRate').textContent = `1 ${fromCurrency} = ${formattedRate} ${toCurrency}`;
}

function updateCurrency() {
  convertCurrency();
  
  // Add button animation feedback
  const btn = document.querySelector('.action-btn');
  btn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    btn.style.transform = '';
  }, 150);
}

function resetCurrency() {
  document.getElementById('amountInput').value = '100';
  document.getElementById('fromCurrency').value = 'USD';
  document.getElementById('toCurrency').value = 'UZS';
  document.getElementById('resultOutput').value = '';
  document.getElementById('exchangeRate').textContent = '1 USD = 12,650 UZS';
  
  // Add button animation feedback
  const btn = document.querySelector('.action-btn.secondary');
  btn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    btn.style.transform = '';
  }, 150);
}

function swapCurrencies() {
  const fromSelect = document.getElementById('fromCurrency');
  const toSelect = document.getElementById('toCurrency');
  
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  
  convertCurrency();
}

// Event listeners for currency converter
document.addEventListener('DOMContentLoaded', function() {
  const amountInput = document.getElementById('amountInput');
  const fromSelect = document.getElementById('fromCurrency');
  const toSelect = document.getElementById('toCurrency');
  const swapBtn = document.getElementById('swapBtn');
  
  if (amountInput) {
    amountInput.addEventListener('input', convertCurrency);
  }
  if (fromSelect) {
    fromSelect.addEventListener('change', convertCurrency);
  }
  if (toSelect) {
    toSelect.addEventListener('change', convertCurrency);
  }
  if (swapBtn) {
    swapBtn.addEventListener('click', swapCurrencies);
  }
  
  // Initial conversion
  convertCurrency();
});

// ============================================
// MOBILE LEGENDS HERO DATABASE
// ============================================

const heroDatabase = {
  martis: {
    name: 'Martis',
    title: 'Ashura King',
    role: 'Fighter/Assassin',
    difficulty: 60,
    durability: 50,
    offense: 90,
    abilities: {
      passive: {
        name: "Ashura's Wrath",
        icon: '🔥',
        description: 'Each attack increases attack speed'
      },
      skill1: {
        name: 'Ashura Aura',
        icon: '⚡',
        description: 'Dash forward dealing damage'
      },
      skill2: {
        name: 'Mortal Coil',
        icon: '🌪️',
        description: 'Pull enemies and stun them'
      },
      ultimate: {
        name: 'Decimate',
        icon: '💀',
        description: 'Knock enemies airborne and execute low HP targets'
      }
    },
    lore: 'Martis, the Ashura King, seeks to conquer all realms with his twin blades.',
    stats: {
      hp: 2850,
      mana: 0,
      physicalAttack: 125,
      physicalDefense: 20,
      magicDefense: 10,
      movementSpeed: 260
    }
  }
};

// Hero display functions
function displayHero(heroKey) {
  const hero = heroDatabase[heroKey];
  if (!hero) return;
  
  console.log('Mobile Legends Hero:', hero.name);
  console.log('Role:', hero.role);
  console.log('Stats:', hero.stats);
}

// Initialize hero display
document.addEventListener('DOMContentLoaded', function() {
  displayHero('martis');
  
  // Add click handlers for skills
  const skills = document.querySelectorAll('.skill');
  skills.forEach((skill, index) => {
    skill.addEventListener('click', function() {
      const hero = heroDatabase.martis;
      const abilityKeys = ['passive', 'skill1', 'skill2', 'ultimate'];
      const ability = hero.abilities[abilityKeys[index]];
      
      if (ability) {
        // Create toast notification
        showToast(`${ability.name}: ${ability.description}`);
      }
    });
  });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showToast(message) {
  // Remove existing toast
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) {
    existingToast.remove();
  }
  
  // Create new toast
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(30, 30, 30, 0.95);
    backdrop-filter: blur(20px);
    color: white;
    padding: 16px 24px;
    border-radius: 16px;
    font-size: 14px;
    z-index: 10000;
    max-width: 300px;
    text-align: center;
    animation: fadeIn 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  `;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Battery status (if supported)
if ('getBattery' in navigator) {
  navigator.getBattery().then(function(battery) {
    updateBatteryStatus(battery);
    
    battery.addEventListener('levelchange', function() {
      updateBatteryStatus(battery);
    });
    
    battery.addEventListener('chargingchange', function() {
      updateBatteryStatus(battery);
    });
  });
}

function updateBatteryStatus(battery) {
  const batteryElement = document.querySelector('.battery');
  if (batteryElement) {
    const level = Math.round(battery.level * 100);
    batteryElement.textContent = battery.charging ? `⚡${level}%` : `${level}%`;
  }
}

// Touch feedback for iOS feel
document.addEventListener('DOMContentLoaded', function() {
  const touchElements = document.querySelectorAll('.widget, .skill, .action-btn, .swap-btn');
  
  touchElements.forEach(el => {
    el.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.98)';
    });
    
    el.addEventListener('touchend', function() {
      this.style.transform = '';
    });
  });
});

console.log('iOS 26 App Loaded Successfully! 🚀');
console.log('Features: Currency Translator, Mobile Legends Hero DB, Real-time Clock');

// ============================================
// MARTIS IMAGE HELPER
// ============================================
// To add a Martis image, call this function with an image URL:
// setMartisImage('https://your-image-url.com/martis.png');
function setMartisImage(imageUrl) {
  const avatar = document.getElementById('martisAvatar');
  if (avatar && imageUrl) {
    avatar.style.background = `url('${imageUrl}') center/cover no-repeat`;
    avatar.classList.add('has-image');
    avatar.textContent = '';
    console.log('Martis image updated!');
  }
}

// Example usage (uncomment and replace with your image URL):
// setMartisImage('https://example.com/martis.png');

// Set Martis image from Reddit
setMartisImage('https://preview.redd.it/where-are-the-lusty-martis-mains-because-new-martis-special-v0-18nomuj8831c1.jpg?width=640&crop=smart&auto=webp&s=3e9ff09e1d76ab729c3ebf3872a157a989774b64');

// ============================================
// PARTICLE ANIMATION SYSTEM
// ============================================
function createParticle() {
  const particle = document.createElement('div');
  particle.style.cssText = `
    position: fixed;
    width: ${Math.random() * 4 + 2}px;
    height: ${Math.random() * 4 + 2}px;
    background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    left: ${Math.random() * 100}vw;
    top: 100vh;
    animation: particleFloat ${Math.random() * 10 + 10}s linear forwards;
  `;
  
  document.body.appendChild(particle);
  
  setTimeout(() => particle.remove(), 20000);
}

// Add particle animation keyframes
const particleStyle = document.createElement('style');
particleStyle.textContent = `
  @keyframes particleFloat {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-110vh) translateX(${Math.random() * 100 - 50}px) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(particleStyle);

// Create particles periodically
setInterval(createParticle, 2000);

// Create initial particles
for (let i = 0; i < 10; i++) {
  setTimeout(createParticle, i * 300);
}
