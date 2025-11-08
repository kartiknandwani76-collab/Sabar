// Main shop detail functionality
function showShop() {
    const params = new URLSearchParams(location.search);
    const id = Number(params.get('id'));
    const shop = SHOPS.find(s => s.id === id);
    
    if (!shop) {
        document.getElementById('shopDetails').innerHTML = '<p>Shop not found</p>';
        return;
    }

    // Render shop info
    document.getElementById('shopDetails').innerHTML = `
        <div class="detail-box">
            <div class="slider">
                ${(shop.images || []).map(url => `
                    <img class="detail-banner" src="${url}" alt="${shop.name}">
                `).join('')}
            </div>
            <div class="shop-header">
                <h2>${shop.name}</h2>
                <div class="shop-meta">
                    <span class="rating">⭐ ${shop.rating}</span>
                    <span class="type-tag">${shop.type}</span>
                </div>
                <p class="location">📍 ${shop.location}</p>
                <p class="about">${shop.about}</p>
            </div>
        </div>
    `;

    // Setup filter section
    const filterBox = document.getElementById('filterBox');
    const boysBtn = document.getElementById('boysBtn');
    const girlsBtn = document.getElementById('girlsBtn');
    let bothBtn = document.getElementById('bothBtn');

    // If Both button doesn't exist, create it (for unisex)
    if (!bothBtn) {
        bothBtn = document.createElement('button');
        bothBtn.id = 'bothBtn';
        bothBtn.className = 'filter-btn';
        bothBtn.innerHTML = '<span>👥</span> Both';
        boysBtn.parentNode.appendChild(bothBtn);
    } else {
        bothBtn.className = 'filter-btn';
        bothBtn.style.display = '';
    }

    boysBtn.style.display = '';
    girlsBtn.style.display = '';

    // Setup based on shop type
    if (shop.type === 'Boys') {
        girlsBtn.style.display = 'none';
        bothBtn.style.display = 'none';
        boysBtn.classList.add('active', 'locked');
    } 
    else if (shop.type === 'Girls') {
        boysBtn.style.display = 'none';
        bothBtn.style.display = 'none';
        girlsBtn.classList.add('active', 'locked');
    }
    else {
        // Unisex shop
        boysBtn.classList.add('active');
        girlsBtn.classList.remove('active');
        bothBtn.classList.remove('active');
        // Remove previous listeners
        boysBtn.replaceWith(boysBtn.cloneNode(true));
        girlsBtn.replaceWith(girlsBtn.cloneNode(true));
        bothBtn.replaceWith(bothBtn.cloneNode(true));
        // Re-get buttons after replacement
        const newBoysBtn = document.getElementById('boysBtn');
        const newGirlsBtn = document.getElementById('girlsBtn');
        const newBothBtn = document.getElementById('bothBtn');
        // Add click handlers
        newBoysBtn.addEventListener('click', () => {
            newBoysBtn.classList.add('active');
            newGirlsBtn.classList.remove('active');
            newBothBtn.classList.remove('active');
            renderServices(shop, 'Boys');
        });
        newGirlsBtn.addEventListener('click', () => {
            newGirlsBtn.classList.add('active');
            newBoysBtn.classList.remove('active');
            newBothBtn.classList.remove('active');
            renderServices(shop, 'Girls');
        });
        newBothBtn.addEventListener('click', () => {
            newBothBtn.classList.add('active');
            newBoysBtn.classList.remove('active');
            newGirlsBtn.classList.remove('active');
            renderServices(shop, 'Both');
        });
    }

    // Initial render for services
    if (shop.type === 'Unisex') {
        renderServices(shop, 'Boys');
    } else {
        renderServices(shop, shop.type);
    }
}

// Helper function to open maps
function openMaps(lat, lng) {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', showShop);

// Render services based on filter
function renderServices(shop, filterType) {
    // Default to all if not provided
    if (!filterType) filterType = shop.type;
    document.getElementById('servicesList').innerHTML = `
        <div class="detail-box services-section">
            <h3>Services</h3>
            <div class="services-list">
                ${shop.services.filter(service => {
                    if (filterType === 'Both') return true;
                    return service.type === filterType || service.type === 'Both';
                }).map(service => `
                    <div class="service">
                        <div>
                            <div class="service-name">${service.name || service[0]}</div>
                            <div class="service-price">₹${service.price || service[1]}</div>
                        </div>
                        <button class="btn book-service" 
                            onclick="location.href='booking.html?shop=${encodeURIComponent(shop.name)}&service=${encodeURIComponent(service.name || service[0])}&price=${service.price || service[1]}'">
                            Book Now
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="detail-box action-buttons">
            <button class="btn" onclick="openMaps(${shop.lat}, ${shop.lng})">
                <span>📍</span> Directions
            </button>
        </div>
    `;
}
