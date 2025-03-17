/**
 * @fileoverview Popups a DDLC error over the current
 * state of the window.
 * 
 * @export showError
 * @usedBy script.js, about-me.js
 */

import {musicController, soundEffects} from "./audio.js";

const gameErrorMessage = document.querySelector(".error-message");
const screenCoverError = document.querySelector(".screen-cover-error");
const gameError = document.querySelector(".error-popup");
const errorOk = document.querySelector(".error-ok");

/**
 * Popups an error over the current state of window.
 * 
 * @param {string} message - Message to display on error.
 * @param {boolean} controlMusic - Force to not play music after closing error.
 */
export default function showError(message = "undefined", controlMusic = true) {
    gameErrorMessage.innerHTML = message;
    screenCoverError.classList.add("show");
    gameError.classList.add("show");
    if (controlMusic) {
        if (musicController._themeIntroPlaying) musicController.pauseIntro();
        else if (musicController._themeLoopPlaying) musicController.pauseLoop();
    };
    
    errorOk.addEventListener("click", remove);

    function remove() {
        screenCoverError.classList.remove("show");
        gameError.classList.remove("show");
        if (controlMusic) {
            if (musicController._themeIntroPaused) musicController.playIntro();
            else if (musicController._themeLoopPaused) musicController.playLoop();
        };

        errorOk.removeEventListener("click", remove);
    };
};