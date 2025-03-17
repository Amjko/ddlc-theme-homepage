/**
 * @fileoverview Execute imported functions from
 * different files.
 */

import {musicController, soundEffects} from "./audio.js";
import startOpeningSequence from "./ddlc-intro.js";
import popupError from "./popup-error.js";
import {menuOptions} from "./hide-options.js";
import {aboutMe} from "./about-me.js";

document.addEventListener("DOMContentLoaded", () => {

    musicController.setupMusicController();
    soundEffects.setupSoundEffects();

    document.querySelector(".popup-button").addEventListener("click", () => {
        startOpeningSequence(0)
        // console.log("Started ddlc opening");
    });

    document.querySelector(".new-game").addEventListener("click", () => {
        popupError("Error: Script file is missing or corrupt.<br>Please reinstall the game.");
        // console.log("New game button worked");
    });

    //* ABOUT ME
    document.querySelector(".about-me").addEventListener("click", () => {
        aboutMe.showAboutMe();
        // console.log("aboutme is shown");
    });
    document.querySelector(".error-open").addEventListener("click", () => {
        soundEffects.buttonSelect.play();
        popupError("Error: about-me.json file is missing or corrupt.", false);
        // console.log("aboutme open worked");
    });
    document.querySelector(".error-copy").addEventListener("click", () => {
        soundEffects.buttonSelect.play();
        aboutMe.copyAboutMe();
        // console.log("aboutme is copied");
    });
    document.querySelector(".error-quit").addEventListener("click", () => {
        soundEffects.buttonSelect.play();
        aboutMe.closeAboutMe();
        // console.log("aboutme is closed");
    });

    //* TECH STACK
    let exitSection = null;

    document.querySelector(".tech-stack").addEventListener("click", () => {
        const section = document.querySelector(".tech-stack-section");
        menuOptions.show(section);
        exitSection = section;
    });

    //* MY PROJECTS
    document.querySelector(".my-projects").addEventListener("click", () => {
        const section = document.querySelector(".my-projects-section");
        menuOptions.show(section);
        exitSection = section;
    });

    //* CONTACT ME
    document.querySelector(".contact-me").addEventListener("click", () => {
        const section = document.querySelector(".contact-me-section");
        menuOptions.show(section);
        exitSection = section;
    });

    //* EXIT SECTION
    document.querySelector(".exit").addEventListener("click", () => {
        menuOptions.hide(exitSection);
    });
});
