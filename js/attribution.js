"use strict";

const init = function (e) {

    let btnLowSeason = document.querySelector("#lowseasonatt");
    let btnAdventures = document.querySelector("#adventuresfl");
    let btnDisney = document.querySelector("#disney");

    const redirectToSignUp = (id) => {
        window.document.location = `../account/sign-up.html?id=${id}`;
    };

    if (btnLowSeason) {
        btnLowSeason.addEventListener('click', () => redirectToSignUp('lowseasonatt'));
    }
    if (btnAdventures) {
        btnAdventures.addEventListener('click', () => redirectToSignUp('adventuresfl'));
    }
    if (btnDisney) {
        btnDisney.addEventListener('click', () => redirectToSignUp('disney'));
    }
};

document.addEventListener('DOMContentLoaded', function() { 
    init();
});