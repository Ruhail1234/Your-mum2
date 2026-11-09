// Simulating a delayed advertisement banner injection that causes a layout shift (CLS)
setTimeout(() => {
    const adSpace = document.getElementById('dynamic-ad-space');
    if (adSpace) {
        adSpace.innerHTML = '<div class="ad-banner">🚨 FLASH SALE: Buy One Rocket Ticket, Get One Free! 🚨</div>';
        console.log("Ad banner dynamically loaded, shifting layout views downward.");
    }
}, 1500);
