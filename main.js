const slideShowImages = document.querySelectorAll(".intro .slideShowImages");

const nextImageDelay = 5000;
let currentImageCounter = 0;

slideShowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    const tempCounter = currentImageCounter;
    setTimeout(() => {
        slideShowImages[tempCounter].style.opacity = 0;
    }, 2000);
    currentImageCounter = (currentImageCounter + 1) % slideShowImages.length;
    slideShowImages[currentImageCounter].style.opacity = 1;
}