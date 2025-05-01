// common.js

const FAVORITES_KEY = 'quranFavorites';
const THEME_KEY = 'quranTheme';
const LAST_RECITER_KEY = 'lastReciter';
const LAST_SURAH_KEY_PREFIX = 'lastSurah_'; // Prefix for reciter-specific last surah
const AUTOPLAY_KEY = 'autoplayEnabled'; // Central key for autoplay

// --- إدارة المفضلة ---

function getFavorites() {
    const favoritesJson = localStorage.getItem(FAVORITES_KEY);
    try {
        // Ensure it's an array, handle null/undefined/non-array cases
        const parsed = favoritesJson ? JSON.parse(favoritesJson) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        console.error("Error parsing favorites from localStorage", e);
        return []; // Return empty array on error
    }
}

function saveFavorites(favorites) {
    if (!Array.isArray(favorites)) {
        console.error("Attempted to save non-array as favorites:", favorites);
        return;
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function addFavorite(reciterId, surahIndex) {
    if (!reciterId || !surahIndex) return false; // Basic validation
    const favorites = getFavorites();
    // Check if already exists
    if (!isFavorite(reciterId, surahIndex)) {
        // Ensure recitersData and chapterData are available
        if (typeof recitersData === 'undefined' || typeof chapterData === 'undefined') {
            console.error("recitersData or chapterData not loaded in addFavorite");
            return false;
        }
        const reciterInfo = recitersData[reciterId];
        const surahName = getSurahNameByIndex(surahIndex); // Use shared function
        if (reciterInfo && surahName !== 'غير معروف') {
            favorites.push({
                reciterId: reciterId,
                reciterName: reciterInfo.name, // Store name for easy display
                surahIndex: parseInt(surahIndex), // Ensure it's a number
                surahName: surahName // Store name for easy display
             });
            saveFavorites(favorites);
             return true; // Added successfully
         } else {
            console.warn("Could not add favorite: Invalid reciter or surah info.", {reciterId, surahIndex});
         }
     }
     return false; // Already exists or invalid data
}

function removeFavorite(reciterId, surahIndex) {
    if (!reciterId || !surahIndex) return;
    let favorites = getFavorites();
    // Filter out the item to remove
    const initialLength = favorites.length;
    favorites = favorites.filter(fav =>
        !(fav.reciterId === reciterId && fav.surahIndex == surahIndex) // Use == for index comparison flexibility
    );
    // Only save if something was actually removed
    if (favorites.length < initialLength) {
        saveFavorites(favorites);
    }
}

function isFavorite(reciterId, surahIndex) {
    if (!reciterId || !surahIndex) return false;
    const favorites = getFavorites();
    return favorites.some(fav =>
        fav.reciterId === reciterId && fav.surahIndex == surahIndex // Use == for index comparison flexibility
    );
}

// --- إدارة الوضع الليلي ---

function applyTheme(theme) {
    const themeIcon = document.getElementById('theme-toggle-icon'); // Standardized ID for icon
    const body = document.body;

    if (theme === 'dark') {
        body.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    } else {
        body.classList.remove('dark-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
    // You might need specific logic here if Plyr styling depends heavily on JS changes,
    // but the body class should be the primary mechanism via CSS.
}

function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const newTheme = isDarkMode ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
}

function loadTheme() {
     // Default to 'light' if nothing is saved or if 'system' preference is desired later
     const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
     applyTheme(savedTheme);
}

// --- إدارة الحالة (آخر قارئ/سورة/إعدادات) ---
function saveLastReciter(reciterId) {
    if (reciterId) {
        localStorage.setItem(LAST_RECITER_KEY, reciterId);
    } else {
         localStorage.removeItem(LAST_RECITER_KEY); // Clear if invalid
    }
}

function getLastReciter() {
    return localStorage.getItem(LAST_RECITER_KEY);
}

 function saveLastSurahForReciter(reciterId, surahIndex) {
    if (reciterId && surahIndex) {
        localStorage.setItem(LAST_SURAH_KEY_PREFIX + reciterId, surahIndex);
    }
 }

 function getLastSurahForReciter(reciterId) {
    if (!reciterId) return null;
    return localStorage.getItem(LAST_SURAH_KEY_PREFIX + reciterId);
 }

 function saveAutoplay(enabled) {
    localStorage.setItem(AUTOPLAY_KEY, enabled ? 'true' : 'false');
 }

 function getAutoplay() {
    return localStorage.getItem(AUTOPLAY_KEY) === 'true';
 }


// --- أدوات مساعدة ---
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    if (!queryString) return params; // Return empty if no query string
    const regex = /([^&=]+)=?([^&]*)/g; // Allow parameters without values
    let m;
    while (m = regex.exec(queryString)) {
        // Decode keys and values, handle '+' sign as space
        const key = decodeURIComponent(m[1].replace(/\+/g, ' '));
        const value = decodeURIComponent(m[2].replace(/\+/g, ' '));
        params[key] = value;
    }
    return params;
}

// --- تهيئة الصفحة المشتركة ---
function initializePage() {
    // Load theme first to prevent flash of unstyled content
    loadTheme();

    // Attach theme toggle listener
    const themeToggleButton = document.getElementById('theme-toggle');
     if (themeToggleButton) {
         themeToggleButton.addEventListener('click', toggleTheme);
         // Set initial title based on loaded theme
          const themeIcon = document.getElementById('theme-toggle-icon');
          if (themeIcon) {
            themeToggleButton.title = themeIcon.classList.contains('fa-sun') ? "الوضع الفاتح" : "الوضع الليلي";
          }

     } else {
        console.warn("Theme toggle button not found.");
     }

    // You could add more common setup here, e.g., setting active nav link
    // setActiveNavLink();
}

// Optional: Function to highlight active navigation link
/*
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop(); // Get filename e.g., "index.html"
    const navLinks = document.querySelectorAll('.app-header nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
*/

// Ensure functions are available globally if needed by inline scripts,
// though DOMContentLoaded approach is generally better.
window.getFavorites = getFavorites;
window.saveFavorites = saveFavorites;
window.addFavorite = addFavorite;
window.removeFavorite = removeFavorite;
window.isFavorite = isFavorite;
window.applyTheme = applyTheme;
window.toggleTheme = toggleTheme;
window.loadTheme = loadTheme;
window.saveLastReciter = saveLastReciter;
window.getLastReciter = getLastReciter;
window.saveLastSurahForReciter = saveLastSurahForReciter;
window.getLastSurahForReciter = getLastSurahForReciter;
window.saveAutoplay = saveAutoplay;
window.getAutoplay = getAutoplay;
window.getQueryParams = getQueryParams;
window.initializePage = initializePage;
// Ensure getSurahNameByIndex is globally available if called from HTML templates or other scripts
if (typeof getSurahNameByIndex !== 'undefined') {
    window.getSurahNameByIndex = getSurahNameByIndex;
}