const slideShowImagesServices = document.querySelectorAll(".introServices .slideShowImagesServices");

const nextImageDelay = 3000;
let currentImageCounter = 0;

slideShowImagesServices[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    const tempCounter = currentImageCounter;
    setTimeout(() => {
        slideShowImagesServices[tempCounter].style.opacity = 0;
    }, 1000);
    currentImageCounter = (currentImageCounter + 1) % slideShowImagesServices.length;
    slideShowImagesServices[currentImageCounter].style.opacity = 1;
}