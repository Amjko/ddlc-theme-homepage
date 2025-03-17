/**
 * @fileoverview Contains all audios to be
 * used throughout the webpage.
 * 
 * @export musicController
 * @export soundEffects
 * 
 * @usedBy script.js, ddlc-intro.js, about-me.js, popup-error.js
 */

/**
 * Controls all music related.
 * 
 * @constant
 * @type {object}
 * @property {audio} themeIntro - Intro theme that plays during opening.
 * @property {audio} themeLoop - Theme that can loop after intro ends.
 * 
 * @property {boolean} - Trackers for music's current status.
 * 
 * @property {function} playIntro
 * @property {function} pauseIntro
 * @property {function} playLoop
 * @property {function} pauseLoop
 * @property {function} setupMusicController - Initializes for loop to play after intro.
 */
export const musicController = {
    themeIntro: new Audio("assets/audio/theme-intro.mp3"),
    themeLoop: new Audio("assets/audio/theme-loop.mp3"),

    _themeIntroPlaying: false,
    _themeIntroPaused: false,
    _themeLoopPlaying: false, 
    _themeLoopPaused: false,

    playIntro() {
        if (!this._themeLoopPlaying) {
            this.themeIntro.play();
            this._themeIntroPlaying = true;
            this._themeIntroPaused = false;
            this._themeLoopPlaying = false;
            this._themeLoopPaused = false;
        }
    },

    pauseIntro() {
        if (this._themeIntroPlaying && !this._themeIntroPaused) {
            this.themeIntro.pause();
            this._themeIntroPlaying = true;
            this._themeIntroPaused = true;
            this._themeLoopPlaying = false;
            this._themeLoopPaused = false;
        };
    },

    playLoop() {
        if (!this._themeIntroPlaying) {
            this.themeLoop.play();
            this._themeIntroPlaying = false;
            this._themeIntroPaused = false;
            this._themeLoopPlaying = true;
            this._themeLoopPaused = false;
        };
    },

    pauseLoop() {
        if (this._themeLoopPlaying && !this._themeLoopPaused) {
            this.themeLoop.pause();
            this._themeIntroPlaying = false;
            this._themeIntroPaused = false;
            this._themeLoopPlaying = true;
            this._themeLoopPaused = true;
        };
    },

    setupMusicController() {
        this.themeIntro.volume = 0.7;
        this.themeLoop.volume = 0.7;
        this.themeLoop.loop = true;
        this.themeIntro.addEventListener("ended", () => {
            this._themeIntroPlaying = false;
            this.playLoop();
        });
    }
};

/**
 * Controls all sound effects.
 * 
 * @constant
 * @type {object}
 * @property {audio} pageFlip - SFX for page open/flipping.
 * @property {audio} buttonHover - When cursor hovers over button.
 * @property {audio} buttonSelect - When a button has been clicked.
 * 
 * @property {function} setupSoundEffects - Initializes sound effects.
 */
export const soundEffects = {
    pageFlip: new Audio("assets/audio/page-flip.mp3"),
    buttonHover: new Audio("assets/audio/menu-hover.mp3"),
    buttonSelect: new Audio("assets/audio/menu-select.mp3"),

    setupSoundEffects() {
        soundEffects.pageFlip.volume = 0.45;
        soundEffects.buttonHover.volume = 0.45;
        soundEffects.buttonSelect.volume = 0.45;

        document.querySelectorAll(".button").forEach(option => {
            option.addEventListener("mouseenter", () => {
                soundEffects.buttonHover.currentTime = 0;
                soundEffects.buttonHover.play();
            });
            option.addEventListener("click", () => {
                soundEffects.buttonSelect.currentTime = 0;
                soundEffects.buttonSelect.play();
            });
        });
    }
};