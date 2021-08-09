var urls = [
  "/images/slideshow/lounge.jpeg",
  "/images/slideshow/orientation.jpeg",
];

const fadeDuration = 500; //in milliseconds how long the fade animation lasts
const imageTransitionDuration = 10000; //in milliseconds how long each image is visible for

var frontHeader = document.getElementById("front");
var backHeader = document.getElementById("back");
var frontHeaderMobile = document.getElementById("front-mobile");
var backHeaderMobile = document.getElementById("back-mobile");

var slideshowIndex = 0;

function startSlideshow() {
  slideshowIndex = (slideshowIndex + 1) % urls.length;
  backHeader.style.backgroundImage = `url('/${urls[slideshowIndex]}')`;
  frontHeader.style.animation = `fadeout ${fadeDuration}ms forwards`;
  setTimeout(function () {
    changeImage(frontHeader, urls[slideshowIndex]);
  }, fadeDuration);

  backHeaderMobile.style.backgroundImage = `url('/${urls[slideshowIndex]}')`;
  frontHeaderMobile.style.animation = `fadeout ${fadeDuration}ms forwards`;
  setTimeout(function () {
    changeImage(frontHeaderMobile, urls[slideshowIndex]);
  }, fadeDuration);

  if (navigator.userAgent.indexOf("Chrome") != -1) {
    frontHeader.style.animation = `fadein ${fadeDuration}ms forwards`;
    frontHeaderMobile.style.animation = `fadein ${fadeDuration}ms forwards`;
  }

  setTimeout(startSlideshow, imageTransitionDuration);
}

function changeImage(header, imagePath) {
  header.style.backgroundImage = `url('/${imagePath}')`;
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    header.style.animation = `fadein ${fadeDuration}ms forwards`;
  }
}

startSlideshow();
