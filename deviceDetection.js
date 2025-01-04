// Function to detect if the device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Function to handle conditional display of content
function handleDeviceDetection() {
    const mobileContent = document.getElementById('mobile-content');
    const desktopMessage = document.getElementById('desktop-message');

    if (isMobileDevice()) {
        if (mobileContent) mobileContent.classList.remove('hidden');
    } else {
        if (desktopMessage) desktopMessage.classList.remove('hidden');
    }
}

// Run the device detection logic when the page loads
window.onload = handleDeviceDetection;