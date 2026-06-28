// ============================================================
// 1. CITY DATA - With Photos and Custom Radius
// ============================================================


const CITY_DATA = {
    calamba: {
        name: "Calamba",
        center: [14.200187202082436, 121.15768831445556],
        zoom: 15,
        circleRadius: 700,
        bounds: {
            southwest: [14.190612118644074, 121.14704087235661],
            northeast: [14.209716919875506, 121.16653604320729]
        },
        memories: [
            {
                coords: [14.203380959536315, 121.15549611563708],
                title: "💕 SM City Calamba",
                description: "Dito ako unang naka punta bago sa Bay sa iyo at dito tayo nag meet 2nd time around <33",
                date: "June 6, 2026",
                media: [
                    { type: 'image', url: `OurMap/memories/June6/1.jpg` },
                    { type: 'image', url: `OurMap/memories/June6/2.jpg` },
                    { type: 'image', url: `OurMap/memories/June6/3.jpg` },
                    { type: 'image', url: `OurMap/memories/June6/4.jpg` },
                    { type: 'image', url: `OurMap/memories/June6/5.jpg` },
                    { type: 'image', url: `OurMap/memories/June6/6.jpg` },
                    { type: 'image', url: `OurMap/memories/June6/7.jpg` },
                    { type: 'image', url: `OurMap/memories/June6/8.jpg` },
                    { type: 'video', url: `OurMap/memories/June6/9.mp4`, thumbnail: `OurMap/memories/June6/9-thumb.png`  },
                    { type: 'image', url: `OurMap/memories/June6/10.jpg`}
                ]
            },
            {
                coords: [14.196154163138862, 121.16149972069405],
                title: "BTC Samgyupwings Calamba",
                description: "Recommended ni Sherwin na medyo flop sa atin",
                date: "June 6, 2026",
                media: [
                ]
            }
        ]
    },
    
    bay: {
        name: "Bay",
        center: [14.180102913033531, 121.28696039483319],
        zoom: 9,
        circleRadius: 600,
        bounds: {
            southwest: [14.173363306425006, 121.27945150296885],
            northeast: [14.189218333318715, 121.29833523970588]
        },
        memories: [
            {
                coords: [14.181803918000574, 121.28234317046712],
                title: "💕 Lowis Staffhouseee",
                description: "Dito ka currentlyyy <33 plus here kita naihatid nung naisip ko na i hahatid mo pa ako pabalik sa highway eh ikaw na iyong malapit no'n sa staffhouse moo",
                date: "Since February 2026 / May 30, 2026",
                media: [
                    { type: 'image', url: `OurMap/memories/May30/1.PNG` },
                    { type: 'image', url: `OurMap/memories/May30/2.jpg` },
                    { type: 'image', url: `OurMap/memories/May30/3.jpg` },
                    { type: 'image', url: `OurMap/memories/May30/4.jpg` },
                    { type: 'image', url: `OurMap/memories/May30/5.jpg` }
                ]
            },
            {
                coords: [14.180869844313554, 121.28530481729354],
                title: "7-Eleven",
                description: "Dito kita unang nakita in person bago tayo nag tricycle pa Jabeee 🙆🫶🫶",
                date: "May 30, 2026",
                media: [
                ]
            },
            {
                coords: [14.181421352868462, 121.2835313401363],
                title: "Card Bank Inc.",
                description: "Dapat ipa DOLE na ito eh, hmppppp 😠😠😠",
                date: "Since time immemorial",
                media: [
                ]
            },
            {
                coords: [14.179676276966264, 121.287951275886],
                title: "💕 Cafe Patcakes",
                description: "Nilibre kita ng salted caramel rito pero mas malasa ang kape kaya hindi mo rin masyado nagustuhan ang init rin though kahit may aircon sila HAHAHHAHA, eto iyong sunod na pinuntahan natin after sa Jabee nung unang punta ko 🙆💙🫶",
                date: "May 30, 2026",
                media: [
                    { type: 'image', url: `OurMap/memories/June6/11.jpg` }
                ]
            },
            {
                coords: [14.178282214820092, 121.28899758656812],
                title: "SHEENA's Mami & Goto Hauz",
                description: "Dito tayo nag eat bago tayo humanap ng Cafeee nung pag uwi ko ng galing Japan <33",
                date: "June 19, 2026",
                media: [
                ]
            },
            {
                coords: [14.178825666945926, 121.29231148591256],
                title: "💕 Bingffle Cafe",
                description: "Great Cafe hangout and date for us",
                date: "June 19, 2026",
                media: [
                    { type: 'video', url: `OurMap/memories/June19/1.mp4`, thumbnail: `OurMap/memories/June19/1-thumb.png` },
                    { type: 'image', url: `OurMap/memories/June19/2.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/3.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/4.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/5.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/6.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/7.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/8.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/9.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/10.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/11.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/12.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/13.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/14.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/15.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/16.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/17.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/18.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/19.jpg` },
                    { type: 'image', url: `OurMap/memories/June19/20.jpg` }
                ]
            },
            {
                coords: [14.178804876463545, 121.28813464814277],
                title: "Jollibee",
                description: "Jabee spot, first time kita pinuntahan at first time sa Bay para mag sorry <33",
                date: "May 30, 2026",
                media: [
                ]
            }
        ]
    }
};

// ============================================================
// 2. DOM REFERENCES
// ============================================================

const selectorScreen = document.getElementById('selector-screen');
const mapScreen = document.getElementById('map-screen');
const mapContainer = document.getElementById('map');
const backBtn = document.getElementById('backBtn');
const cityNameDisplay = document.getElementById('cityNameDisplay');

let currentMap = null;
let currentCity = null;

// ============================================================
// 3. MEDIA GALLERY FUNCTIONS (Supports Images & Videos)
// ============================================================

// Store media data globally for the lightbox
let currentLightboxMedia = [];
let currentLightboxIndex = 0;

// Create gallery HTML (supports both images and videos)
function createGalleryHTML(mediaItems, memoryIndex) {
    if (!mediaItems || mediaItems.length === 0) {
        return `<div style="text-align:center;color:#999;padding:20px;">No media yet 📸</div>`;
    }
    
    let galleryHTML = `<div class="media-gallery" data-memory-index="${memoryIndex}">`;
    
    mediaItems.forEach((item, itemIndex) => {
        const isVideo = item.type === 'video';
        const thumbnail = isVideo ? (item.thumbnail || item.url) : item.url;
        const mediaTypeIcon = isVideo ? '▶️' : '📸';
        
        galleryHTML += `
            <div class="media-item ${isVideo ? 'video-item' : 'image-item'}" 
                 data-media-index="${itemIndex}" 
                 data-memory-index="${memoryIndex}"
                 data-type="${item.type}"
                 data-url="${item.url}">
                <img src="${thumbnail}" alt="${isVideo ? 'Video' : 'Photo'} ${itemIndex + 1}" loading="lazy">
                <div class="media-overlay">${mediaTypeIcon}</div>
                ${isVideo ? '<div class="video-badge">▶</div>' : ''}
            </div>
        `;
    });
    
    galleryHTML += `</div>`;
    return galleryHTML;
}

// Open lightbox (supports both images and videos)
function openLightbox(mediaIndex, memoryIndex) {
    console.log('Opening lightbox for media index:', mediaIndex);
    
    const city = CITY_DATA[currentCity];
    if (!city) {
        console.error('No city data found');
        return;
    }
    
    const memory = city.memories[memoryIndex];
    if (!memory || !memory.media) {
        console.error('No media found for this memory');
        return;
    }
    
    // Store media for this memory
    currentLightboxMedia = memory.media;
    currentLightboxIndex = mediaIndex;
    
    // Show lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxCounter = document.getElementById('lightbox-counter');
    
    // Render the current media
    renderLightboxMedia(currentLightboxIndex);
    
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxMedia.length}`;
    lightbox.style.display = 'flex';
    
    console.log('Lightbox opened with', currentLightboxMedia.length, 'media items');
}

// Render media in lightbox (image or video)
function renderLightboxMedia(index) {
    const lightboxMediaContainer = document.getElementById('lightbox-media-container');
    const item = currentLightboxMedia[index];
    
    if (!item) return;
    
    if (item.type === 'video') {
        // Create video element
        lightboxMediaContainer.innerHTML = `
            <video controls autoplay playsinline class="lightbox-video">
                <source src="${item.url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else {
        // Create image element
        lightboxMediaContainer.innerHTML = `
            <img src="${item.url}" alt="Memory media" class="lightbox-image">
        `;
    }
}

// Close lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    // Pause any playing video
    const video = document.querySelector('.lightbox-video');
    if (video) {
        video.pause();
    }
}

// Navigate lightbox
function navigateLightbox(direction) {
    if (currentLightboxMedia.length === 0) return;
    
    currentLightboxIndex = (currentLightboxIndex + direction + currentLightboxMedia.length) % currentLightboxMedia.length;
    
    renderLightboxMedia(currentLightboxIndex);
    
    const lightboxCounter = document.getElementById('lightbox-counter');
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxMedia.length}`;
}

// ============================================================
// 4. ATTACH MEDIA CLICK LISTENERS
// ============================================================

function attachMediaListeners() {
    const mediaItems = document.querySelectorAll('.media-item');
    console.log('Found', mediaItems.length, 'media items');
    
    mediaItems.forEach(item => {
        item.removeEventListener('click', handleMediaClick);
        item.addEventListener('click', handleMediaClick);
    });
}

function handleMediaClick(e) {
    const item = e.currentTarget;
    const mediaIndex = parseInt(item.dataset.mediaIndex);
    const memoryIndex = parseInt(item.dataset.memoryIndex);
    
    console.log('Media clicked - Index:', mediaIndex, 'Memory:', memoryIndex);
    openLightbox(mediaIndex, memoryIndex);
}

// ============================================================
// 5. MAP CREATION FUNCTION
// ============================================================

function createMap(cityKey) {
    const city = CITY_DATA[cityKey];
    if (!city) return;
    
    currentCity = cityKey;
    cityNameDisplay.textContent = city.name;
    
    if (currentMap) {
        currentMap.remove();
        currentMap = null;
    }
    
    currentMap = L.map(mapContainer, {
        center: city.center,
        zoom: city.zoom,
        maxBounds: [
            city.bounds.southwest,
            city.bounds.northeast
        ],
        maxBoundsViscosity: 1.0,
        minZoom: cityKey === "bay" ? 16 : 16,
        maxZoom: 19,
        zoomControl: true,
        attributionControl: false
    });
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(currentMap);
    
    currentMap.scrollWheelZoom.enable();
    
    L.circle(city.center, {
        color: '#ff6b9d',
        fillColor: '#ffb6c1',
        fillOpacity: 0.08,
        radius: city.circleRadius || 700
    }).addTo(currentMap);
    
    const heartIcon = L.divIcon({
        html: '💗',
        iconSize: [30, 30],
        className: 'heart-pin'
    });
    
    city.memories.forEach((memory, index) => {
        // Use 'media' array instead of 'photos'
        const galleryHTML = createGalleryHTML(memory.media, index);
        
        const popupContent = `
            <div class="popup-content">
                <strong>${memory.title}</strong>
                <div class="popup-description">${memory.description}</div>
                <div class="date">📅 ${memory.date}</div>
                <div class="gallery-divider">━━━ 📸 Memories ━━━</div>
                ${galleryHTML}
            </div>
        `;
        
        const marker = L.marker(memory.coords, {
            icon: heartIcon,
            riseOnHover: true
        })
        .addTo(currentMap)
        .bindPopup(popupContent, {
            className: 'custom-popup',
            maxWidth: 350,
            minWidth: 280,
            maxHeight: 500
        });
        
        marker.on('popupopen', function() {
            setTimeout(() => {
                attachMediaListeners();
            }, 200);
        });
    });
    
    setTimeout(() => {
        currentMap.openPopup(
            `<strong> Hiiiii Babyyyyyyyyyyy!🙆🫶💙💙</strong><br>Tap the 💗 pins to see our ${city.name} memories.`,
            city.center,
            { className: 'custom-popup', maxWidth: 250 }
        );
    }, 800);
    
    selectorScreen.style.display = 'none';
    mapScreen.style.display = 'block';
    
    setTimeout(() => {
        currentMap.invalidateSize();
    }, 100);
    
    console.log(`✅ ${city.name} map loaded!`);
}

// ============================================================
// 6. EVENT LISTENERS
// ============================================================

document.querySelectorAll('.map-card[data-city]').forEach((card) => {
    card.addEventListener('click', function() {
        const cityKey = this.dataset.city;
        if (!this.classList.contains('disabled')) {
            createMap(cityKey);
        }
    });
});

backBtn.addEventListener('click', function() {
    if (currentMap) {
        currentMap.remove();
        currentMap = null;
    }
    mapScreen.style.display = 'none';
    selectorScreen.style.display = 'flex';
});

document.addEventListener('keydown', function(e) {
    if (document.getElementById('lightbox').style.display === 'flex') {
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
        if (e.key === 'Escape') closeLightbox();
        if (e.key === ' ') {
            e.preventDefault();
            const video = document.querySelector('.lightbox-video');
            if (video) {
                video.paused ? video.play() : video.pause();
            }
        }
    }
});

window.addEventListener('resize', function() {
    if (currentMap) {
        setTimeout(() => {
            currentMap.invalidateSize();
        }, 200);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(attachMediaListeners, 500);
});

console.log('✅ Multi-map Memory Lane with Video Support loaded!');
console.log(`📍 ${Object.keys(CITY_DATA).length} cities available.`);