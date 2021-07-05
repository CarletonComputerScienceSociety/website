var urls = [
  "/images/orientation2018-min.jpeg",
  "/images/poster.jpeg",
  "/images/poster2.jpeg",
];

var header = document.getElementsByClassName("home-header-image");

var index = 0;

function startSlideshow() {
  index = (index + 1) % urls.length;
  for (let i = 0; i < header.length; i++) {
    header[i].style.animation = "fadeout 500ms forwards";
    setTimeout(function () {
      changeImage(header[i], urls[index]);
    }, 500);
  }
  setTimeout(startSlideshow, 2000);
}

function changeImage(header, imagePath) {
  header.style.backgroundImage = `url('/ccss-website${imagePath}')`;
  header.style.animation = "fadein 500ms forwards";
}

startSlideshow();
