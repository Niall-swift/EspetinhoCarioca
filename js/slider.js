
let time = 2000,
currentImageIndex = 0,

images = document
            .querySelectorAll("#slider img")
max = images.length;




function nextImage() {

images[currentImageIndex]
    .classList.remove("selecte")

currentImageIndex++

if(currentImageIndex >= max)
    currentImageIndex = 0

images[currentImageIndex]
    .classList.add("selecte")
}

function start() {
setInterval(() => {
    // troca de image
    nextImage()
}, time)
}

window.addEventListener("load", start)