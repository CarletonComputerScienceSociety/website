

var urls = [
  "/images/orientation2018-min.jpeg",
  "/images/poster.jpeg",
  "/images/poster2.jpeg",
];

var frontHeader = document.getElementById("front")
var backHeader = document.getElementById("back")
var frontHeaderMobile = document.getElementById("front-mobile")
var backHeaderMobile = document.getElementById("back-mobile")

var index = 0;

function startSlideshow(){
    index = (index + 1) % urls.length;
    backHeader.style.backgroundImage = `url('/ccss-website${urls[index]}')`
    frontHeader.style.animation = "fadeout 500ms forwards";
    setTimeout(function(){ changeImage(frontHeader, urls[index])}, 500)
    
    backHeaderMobile.style.backgroundImage = `url('/ccss-website${urls[index]}')`
    frontHeaderMobile.style.animation = "fadeout 500ms forwards";
    setTimeout(function(){ changeImage(frontHeaderMobile, urls[index])}, 500)

    setTimeout(startSlideshow, 2000);
}

function changeImage(header, imagePath){
    header.style.backgroundImage = `url('/ccss-website${imagePath}')`
    header.style.animation = "fadein 500ms forwards"
    
}

startSlideshow()

