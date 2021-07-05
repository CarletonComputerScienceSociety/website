// const path = require('path');

var imageUrls = [
  "/images/orientation2018-min.jpeg",
  "/images/poster.jpeg",
  "/images/poster2.jpeg",
];

var imageHeader = document.getElementsByClassName("home-header-image")

var imageIndex = 0;

function startSlideshow(){
    imageIndex = (imageIndex + 1) % imageUrls.length;
    for (let i = 0; i < imageHeader.length; i++){
        imageHeader[i].style.backgroundImage = "url('/ccss-website" + imageUrls[imageIndex] + "')"; //temp file path
    }
    console.log(imageHeader[0].style.backgroundImage);
    setTimeout(startSlideshow, 2000);
}

startSlideshow()

