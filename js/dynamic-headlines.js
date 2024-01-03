
/*!
 * Dynamic headlines for gojaunt.ai
 */

var headings = ['Where can I get great,', 'sushi in San Francisco', 'at 12:42 at night?', 'Where can I find a nice,', 'bohemian, chic store in', 'Tulsa, Oklahoma?', 'Where can I find an', 'escape from tourists', 'in lower Manhatten?', 'Where can I find a', 'Vikings bar in', 'West Hollywood?', 'Where can I find the', 'freshest powder near', 'Park City, Utah?', 'Welcome to Jaunt,', 'where every chat leads', 'to adventure.'];
var i = 0; // Ensure i is defined
var intervalId = setInterval(function() {
    var element = document.getElementById('dynamicLineOne');
	

    // Fade out
    element.classList.remove('dynamic-fade-in');

    // Change text and fade in after a short delay
    setTimeout(function() {
        element.innerHTML = headings[i];
        element.classList.add('dynamic-fade-in');
        if (i == (headings.length - 1)) {
            i = 0;
        } else {
            i++;
        }
    }, 1000); // Adjust the timeout to control the delay between fade out and in
}, 5000); // Adjust this interval as needed

var i = 0; // Ensure i is defined
var intervalId = setInterval(function() {
    var element = document.getElementById('dynamicLineTwo');

    // Fade out
    element.classList.remove('dynamic-fade-in');

    // Change text and fade in after a short delay
    setTimeout(function() {
        element.innerHTML = headings[i];
        element.classList.add('dynamic-fade-in');
        if (i == (headings.length - 1)) {
            i = 0;
        } else {
            i++;
        }
    }, 1000); // Adjust the timeout to control the delay between fade out and in
}, 5000); // Adjust this interval as needed
		
var i = 0; // Ensure i is defined
var intervalId = setInterval(function() {
    var element = document.getElementById('dynamicLineFive');

    // Fade out
    element.classList.remove('dynamic-fade-in');

    // Change text and fade in after a short delay
    setTimeout(function() {
        element.innerHTML = headings[i];
        element.classList.add('dynamic-fade-in');
        if (i == (headings.length - 1)) {
            i = 0;
        } else {
            i++;
        }
    }, 1000); // Adjust the timeout to control the delay between fade out and in
}, 5000); // Adjust this interval as needed


