if ('serviceWorker' in navigator) {
    // Use a relative path for the service worker
    navigator.serviceWorker.register('sw.js')
        .then(registration => console.log('Service Worker registered!'))
        .catch(err => console.error('Service Worker registration failed: ', err));
}
