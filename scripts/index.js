let deferredPrompt;

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-info bar from appearing on mobile
    event.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = event;
});

document.getElementById('install').addEventListener('click', () => {
    if (deferredPrompt) {
        deferredPrompt.prompt(); // Show the install prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
        });
    }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(registration => {
        // Listen for updates to the service worker
        registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;

            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // Notify the new service worker to skip waiting
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                }
            });
        });
    });

    // Reload the page when the new service worker activates
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
    });
}

