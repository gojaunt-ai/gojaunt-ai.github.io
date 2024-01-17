
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
