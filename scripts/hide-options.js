const exitButton = document.querySelector(".exit");
const logo = document.querySelector(".amjko-logo-img");
const menuOptionButtons = document.querySelectorAll(".options");

export const menuOptions = {
    show(section = null) {
        if (!section) return;
        logo.classList.add("hide");
        section.classList.add("show");
        exitButton.classList.add("show");
        menuOptionButtons.forEach(option => option.classList.add("hidden"));
    },
    
    hide(section = null) {
        if (!section) return;
        logo.classList.remove("hide");
        section.classList.remove("show");
        exitButton.classList.remove("show");
        menuOptionButtons.forEach(option => option.classList.remove("hidden"));
    }
};