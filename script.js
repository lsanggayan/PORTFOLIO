const music = document.getElementById("bgMusic");

function showSection(id) {
    // Hide all sections
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    const targetSection = document.getElementById(id);
    targetSection.classList.add("active");

    // 🎵 MUSIC CONTROL
    if (id === "home" || id === "view") {
        music.pause();          // stop muna
        music.currentTime = 0;  // reset to intro
        music.play().catch(() => {});
    } else if (id === "about" || id === "activity") {
        music.pause();          // stop music
        music.currentTime = 0;  // reset para pagbalik intro ulit
    }

    // 🎞 Carousel control (kung meron ka pa)
    const carouselTrack = document.querySelector(".carousel-track");
    if (!carouselTrack) return;

    if (id === "view") {
        carouselTrack.style.animation = "none";
        carouselTrack.offsetHeight;
        carouselTrack.style.animation = "slideLoop 20s linear infinite";
        carouselTrack.style.animationPlayState = "running";
    } else {
        carouselTrack.style.animationPlayState = "paused";
        carouselTrack.style.transform = "translateX(0)";
    }
}


// view
const viewContainer = document.querySelector(".view-container");
const leftBox = document.querySelector(".left-box");

leftBox.addEventListener("click", () => {
    viewContainer.classList.toggle("shrink");
});


// Hacker effect
const hackerBar = document.getElementById("hackerBar");
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateHackerText() {
    let hackerText = "";
    for (let i = 0; i < 200; i++) {    // mas mahaba
        hackerText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    hackerBar.childNodes.forEach(node => {
        if (node.nodeType === 3) node.remove(); // remove old text nodes
    });
    hackerBar.appendChild(document.createTextNode(hackerText));
}


setInterval(generateHackerText, 100);



//SLIDESHOW


let currentSlide = 0;
let slideInterval = null;

// Function to start slideshow


function showSection(id) {
    // Hide all sections
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    const targetSection = document.getElementById(id);
    targetSection.classList.add("active");

    // Music control
    if (id === "about" || id === "activity") music.pause();
    else music.play().catch(() => {});

    // Carousel control
    const carouselTrack = document.querySelector(".carousel-track");
    if (!carouselTrack) return; // safe check

    if (id === "view") {
        // Reset transform and start animation
        carouselTrack.style.animation = "none"; // stop temporarily
        carouselTrack.offsetHeight; // force reflow
        carouselTrack.style.animation = "slideLoop 20s linear infinite";
        carouselTrack.style.animationPlayState = "running";
    } else {
        // Pause animation for all other sections
        carouselTrack.style.animationPlayState = "paused";
        carouselTrack.style.transform = "translateX(0)"; // reset position
    }
}
