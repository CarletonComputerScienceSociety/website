var urls = ["/images/v0saWei.jpg", "/images/orientation2018-min.jpeg"];

const fadeDuration = 500; //in milliseconds
const imageTransitionDuration = 10000;

var frontHeader = document.getElementById("front");
var backHeader = document.getElementById("back");
var frontHeaderMobile = document.getElementById("front-mobile");
var backHeaderMobile = document.getElementById("back-mobile");

var slideshowIndex = 0;

function startSlideshow() {
  slideshowIndex = (slideshowIndex + 1) % urls.length;
  backHeader.style.backgroundImage = `url('/ccss-website${urls[slideshowIndex]}')`;
  frontHeader.style.animation = `fadeout ${fadeDuration}ms forwards`;
  setTimeout(function () {
    changeImage(frontHeader, urls[slideshowIndex]);
  }, fadeDuration);

  backHeaderMobile.style.backgroundImage = `url('/ccss-website${urls[slideshowIndex]}')`;
  frontHeaderMobile.style.animation = `fadeout ${fadeDuration}ms forwards`;
  setTimeout(function () {
    changeImage(frontHeaderMobile, urls[slideshowIndex]);
  }, fadeDuration);

  if (navigator.userAgent.indexOf("Chrome") != -1) {
    frontHeader.style.animation = `fadein ${fadeDuration}ms forwards`;
    frontHeaderMobile.style.animation = `fadein ${fadeDuration}ms forwards`;
  }

  setTimeout(startSlideshow, imageTransitionDuration); //in milliseconds how long each image is visible for
}

function changeImage(header, imagePath) {
  header.style.backgroundImage = `url('/ccss-website${imagePath}')`;
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    header.style.animation = `fadein ${fadeDuration}ms forwards`;
  }
}

startSlideshow();
