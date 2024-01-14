/**
 Original Code

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

 */

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('redirectButton');
    button.addEventListener('click', function() {
        detectOSAndRedirect();
    });
});

function detectOSAndRedirect() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        window.location.replace("https://www.google.com");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.replace("https://www.apple.com");
    } else {
        // Optional: handle other cases or do nothing
    }
}
