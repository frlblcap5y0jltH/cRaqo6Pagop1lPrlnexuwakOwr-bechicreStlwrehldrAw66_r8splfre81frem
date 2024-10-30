const x8003 = "Xireysecrets123";
const x8004 = "NiggaWhat?";
const x8005 = "RacistNigger!";

function validatePassword() {
    const passwordInput = document.getElementById("password-input").value;
    if (passwordInput === x8003) {
        document.getElementById("password-modal").style.display = "none";
        document.querySelector(".container").style.display = "block";
        document.body.classList.replace("locked", "unlocked");
    } else {
        location.reload();
    }
}

function scrollToImages() {
    document.getElementById("image-section").scrollIntoView({ behavior: "smooth" });
}

function downloadImages() {
    const imageUrls = ["src/photos/numberone.png", "src/photos/numbertwo.png", "src/photos/numberthree.png"];
    imageUrls.forEach(url => {
        const link = document.createElement("a");
        link.href = url;
        link.download = url.split('/').pop();
        link.click();
    });
}

function viewImageFullscreen(src) {
    const fullscreenModal = document.getElementById("fullscreen-modal");
    const fullscreenImage = document.getElementById("fullscreen-image");
    fullscreenImage.src = src;
    fullscreenModal.style.display = "flex";
}

function closeFullscreen() {
    document.getElementById("fullscreen-modal").style.display = "none";
}
