/**
 * @fileoverview Handles opening sequence that is
 * inspired by Doki Doki Literature Club.
 * 
 * @export openingSequence
 * @usedBy script.js
 */

import {musicController, soundEffects} from "./audio.js";

// Popup on freshly loaded DOM content.
const popup = document.querySelector(".popup");
const popupButton = document.querySelector(".popup-button")

// Elements used on opening sequence
const screenCoverBlack = document.querySelector(".screen-cover-black");
const openingMessage1 = document.querySelector(".message-1");
const openingMessage2 = document.querySelector(".message-2");
const logo = document.querySelector(".logo");

// The background with endless moving circles.
const mainMenu = document.querySelector(".main-menu");

// Delays (milliseconds) before executing next action in opening sequence
const openingSequenceDelays = [300, 500, 600, 1600, 2200, 2700, 1000];

/**
 * Begins DDLC-inspired intro to main menu.
 * 
 * @param  {integer} process - #th of sequences 
 * @return {void}
 */
export default function openingSequence(process = 0) {
    if (process > openingSequenceDelays.length) return;

    if (process == 0) {
        popupButton.classList.add("shadow");
        setTimeout(() => {
            popupButton.classList.remove("shadow");
            musicController.playIntro();
            openingSequence(process + 1);
            // console.log("Process 0 worked");
        }, openingSequenceDelays[process]);
    } else if (process == 1) {
        popup.style.opacity = 0;
        setTimeout(() => {
            popup.style.display = "none";
            popupButton.style.zIndex = "-1";
            openingSequence(process + 1);
            // console.log("Process 1 worked");
        }, openingSequenceDelays[process]);
    } else if (process == 2) {
        setTimeout(() => {
            screenCoverBlack.style.zIndex = "10";
            screenCoverBlack.style.visibility = "visible";
            screenCoverBlack.style.backgroundColor = "black";
            openingMessage1.style.zIndex = "15";        
            openingSequence(process + 1);
            // console.log("Process 2 worked");
        }, openingSequenceDelays[process]);
    } else if (process == 3) {
        setTimeout(() => {
            openingMessage1.style.opacity = 1;
            setTimeout(() => {
                openingMessage1.style.opacity = 0;
                openingSequence(process + 1);
                // console.log("Process 3 worked");
            }, 3800);
        }, openingSequenceDelays[process]);
    } else if (process == 4) {
        setTimeout(() => {
            screenCoverBlack.classList.add("white");
            openingMessage1.style.zIndex = "-1";
            openingMessage1.style.display = "none";
            logo.style.zIndex = "15";
            logo.style.opacity = 1;
            openingSequence(process + 1);
            // console.log("Process 4 worked");
        }, openingSequenceDelays[process]);
    } else if (process == 5) {
        setTimeout(() => {
            logo.style.opacity = 0;
            setTimeout(() => {
                logo.style.zIndex = "-1";
                logo.style.display = "none";
            }, 1000);
            openingMessage2.innerHTML = getRandomText();
            openingSequence(process + 1);
            // console.log("Process 5 worked");
        }, openingSequenceDelays[process]);
    } else if (process == 6) {
        setTimeout(() => {
            openingMessage2.style.opacity = 1;
            setTimeout(() => {
                openingMessage2.style.opacity = 0;
                openingSequence(process + 1);
                // console.log("Process 6 worked");
            }, 3000);
        }, openingSequenceDelays[process]);
    } else if (process == openingSequenceDelays.length) {
        mainMenu.style.display = "block";
        mainMenu.style.zIndex = "20";
        setTimeout(() => {
            mainMenu.style.opacity = 1;
            openMainMenu();
            setTimeout(() => {
                mainMenu.classList.add("slide");
                // console.log("Process 7 worked");
            }, 300);
        }, 500);
    };
};

/**
 * Randomizes a float and chooses a text with a predefined chance.
 * 
 * @param  {void}
 * @return {string} - The text to show in screen for "openingMessage2".
 */
function getRandomText() {
    let randomFloat = Math.random();
    let messages = [
        {min: 0.00, max: 0.01, text: "I will carve out your skin."},
        {min: 0.01, max: 0.05, text: "Amjko is not real."},
        {min: 0.05, max: 0.1,  text: "Just Monika."},
        {min: 0.1,  max: 1.00, text: "This isn&#39;t the homepage you were expecting, is it?<br>Nothing is ever as it seems."}
    ]

    for (let msg of messages) {
        if (randomFloat >= msg.min && randomFloat < msg.max)
            return msg.text;
    };
};

/**
 * Opens DDLC-inspired main menu.
 * 
 * @param  {void}
 * @return {void}
 */
function openMainMenu() {
    const sideNavigationSection = document.querySelector(".side-panel");
    const sideNavigationImage = document.querySelector(".side-nav-img");
    const amjkoStudioLogo = document.querySelector(".amjko-logo-img");
    const menuOptions = document.querySelector(".menu-options");
    
    sideNavigationSection.classList.add("show");
    menuOptions.style.opacity = 1;
    menuOptions.style.zIndex = "50";
    setTimeout(() => {
        sideNavigationImage.classList.add("show");
    }, 500);
    setTimeout(() => {
        amjkoStudioLogo.classList.add("show");
    }, 800);
};