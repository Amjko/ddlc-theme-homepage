/**
 * @fileoverview Opens a fake Ren'Py error containing
 * information about Amjko.
 * 
 * @export aboutMe
 * @usedBy script.js
 */

import {musicController, soundEffects} from "./audio.js";
import popupError from "./popup-error.js";

const aboutMeBackground = document.querySelector(".black-background");
const aboutMeSection = document.querySelector(".about-me-section");
const userDeviceInfo = document.querySelectorAll(".user-device-info");

/**
 * Dynamically display basic device information of user
 * and display about-me section.
 * 
 * @constant
 * @type {object}
 * @property {function} showAboutMe - Get device info and display about-me.
 * @property {function} closeAboutMe - Close about-me.
 * @property {function} copyAboutMe - Copy text inside about-me.
 */
export const aboutMe = {
    showAboutMe() {
        userDeviceInfo.forEach(p => {
            if (p.classList.contains("info-1")) p.innerHTML = `${getOS()}-${navigator.platform}`;
            if (p.classList.contains("info-2")) p.innerHTML = `${getBrowser()} Engine`;
            if (p.classList.contains("info-3")) p.innerHTML = `Amjko Studio 1.02`;
        });
        soundEffects.pageFlip.play();
        aboutMeBackground.classList.add("show");
        aboutMeSection.classList.add("show");
        if (musicController._themeIntroPlaying) musicController.pauseIntro();
        else if (musicController._themeLoopPlaying) musicController.pauseLoop();
    },
    
    closeAboutMe() {
        aboutMeBackground.classList.remove("show");
        aboutMeSection.classList.remove("show");
        if (musicController._themeIntroPaused) musicController.playIntro();
        else if (musicController._themeLoopPaused) musicController.playLoop();
    },

    copyAboutMe() {
        copyLog(document.querySelector(".about-me-section"));
    }
};

/**
 * Copies text ("log") inside about-me section.
 * 
 * @param {nodeList} logSection - A nodeList of all elements within about-me.
 * @return {void} - Copy formatted text.
 */
function copyLog(logSection) {
    if (typeof logSection === "string") {
        logSection = document.querySelector(logSection);
    };
    let logContent = logSection.querySelectorAll('p');
    let copyText = Array.from(logContent).map(log => log.textContent).join('\n');
    navigator.clipboard.writeText(copyText)
        .then(() => popupError("Log successfully copied.", false))
        .catch(() => popupError("Failed to copy log.", false));
};

/**
 * Get basic OS information from user.
 * 
 * @param {void}
 * @return {string} - OS name, defaults to "undefined".
 */
function getOS() {
    let userAgent = navigator.userAgent;
    if (userAgent.includes("Win")) return "Windows";
    if (userAgent.includes("Mac")) return "macOS";
    if (userAgent.includes("Linux")) return "Linux";
    if (userAgent.includes("Android")) return "Android";
    if (userAgent.includes("iPhone") || userAgent.includes("iPad")) return "iOS";
    return "Undefined";
};

/**
 * Get browser information from user.
 * 
 * @param {void}
 * @return {string} - Browser name, defaults to "undefined".
 */
function getBrowser() {
    let userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome")) return "Chrome";
    if (userAgent.includes("Firefox")) return "Firefox";
    if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) return "Safari";
    if (userAgent.includes("Edge")) return "Edge";
    if (userAgent.includes("Opera")|| userAgent.includes("OPR")) return "Opera";
    return "Undefined";
};