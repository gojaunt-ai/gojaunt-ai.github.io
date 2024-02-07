
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('redirectButton');
    button.addEventListener('click', function() {
        detectOSAndRedirect();
    });
});

function detectOSAndRedirect() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        window.location.replace("https://gojaunt.ai/sub-pages/android-coming-soon.html");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.replace("https://apps.apple.com/us/app/gojaunt/id6474056839");
    } else {
        // Optional: handle other cases or do nothing
    }
}
