function fileClosure() {
  console.log("Hello World");
}

window.addEventListener("load", fileClosure());

;
globalTimeout = null;

//When hovered over calls this function
function showContent(container, blocks, lefts, rights) {
  // console.log(`Showing content ${container}`)
  hideUnneededContent(container, blocks, lefts, rights, true);
}

//hides everything that shouldn't be seen
function hideUnneededContent(container, blocks, lefts, rights, hoverOver) {
  // console.log(`Hiding content on ${hoverOver ? 'hover over' : 'hover out'}`)
  clearTimeout(globalTimeout);
  accContents = document.getElementsByClassName("actual_content");
  for (var i = 0; i < accContents.length; i++) {
    if (accContents[i].id !== container) {
      accContents[i].style.display = "none";
      accContents[i].style.animation = "none";
    }
  }
  hoverOver
    ? setTimeout(function () {
        changeDisplayToFlex(container, blocks, lefts, rights);
      }, 10)
    : (globalTimeout = setTimeout(function () {
        makeContentTransparent(container, blocks, lefts, rights);
      }, 10));
}

//changes the display of actual_content from none to flex
function changeDisplayToFlex(container, blocks, lefts, rights) {
  // console.log(`Changing display of ${container} to flex`)
  document.getElementById(container).style.pointerEvents = "auto";
  document.getElementById(container).style.display = "flex";
  document.getElementById(container).style.position = "relative";
  growItemBoxes(container, blocks, lefts, rights);
}

//Changes the height of any item boxes inside actual_content
function growItemBoxes(container, blocks, lefts, rights) {
  // console.log(`Growing item boxes ${blocks}`)
  left = document.getElementsByClassName(lefts);
  right = document.getElementsByClassName(rights);
  block = document.getElementsByClassName(blocks);
  for (var i = 0; i < block.length; i++) {
    block[i].style.animation = "grow 400ms forwards";
    left[i].style.animation = "grow 400ms forwards";
    right[i].style.animation = "grow 400ms forwards";
  }
  globalTimeout = setTimeout(function () {
    makeContentOpaque(container);
  }, 100);
}

//makes everything in actual_content opaque
function makeContentOpaque(container) {
  // console.log(`Making ${container} opaque`)
  document.getElementById(container).style.animation = "none";
  clearTimeout(globalTimeout);
  document.getElementById(container).style.opacity = "0";
  document.getElementById(container).style.animation = "fadein 600ms forwards";
  document.getElementById(container).style.opacity = "1";
}

//This function is called on hover out
function hideContent(container, blocks, lefts, rights) {
  // console.log(`Hiding content ${container}`)
  hideUnneededContent(container, blocks, lefts, rights, false);
}

//Makes hovered out content transparent
function makeContentTransparent(container, blocks, lefts, rights) {
  // console.log(`Making ${container} transparent`)
  document.getElementById(container).style.animation = "fadeout 200ms forwards";
  document.getElementById(container).style.opacity = "0";
  globalTimeout = setTimeout(function () {
    shrinkItemBoxes(container, blocks, lefts, rights);
  }, 200);
}

//shrinks hovered out content
function shrinkItemBoxes(container, blocks, lefts, rights) {
  // console.log(`Shrinking item boxes ${blocks}`)
  document.getElementById(container).style.animation = "none";
  clearTimeout(globalTimeout);
  left = document.getElementsByClassName(lefts);
  right = document.getElementsByClassName(rights);
  block = document.getElementsByClassName(blocks);
  for (var i = 0; i < block.length; i++) {
    block[i].style.animation = "shrink 400ms forwards";
    left[i].style.animation = "shrink 400ms forwards";
    right[i].style.animation = "shrink 400ms forwards";
  }
  document.getElementById(container).style.pointerEvents = "none";
  globalTimeout = setTimeout(function () {
    changeDisplayToNone(container);
  }, 300);
}

//changes display of hovered out content to none
function changeDisplayToNone(container) {
  // console.log(`Changing display of ${container} to none`)
  document.getElementById(container).style.display = "none";
  document.getElementById(container).style.position = "fixed";
}

function keepContent(container, blocks) {
  clearTimeout(globalTimeout);
  document.getElementById(container).style.animationPlayState = "paused";
  document.getElementById(container).style.animation = "none";
  document.getElementById(container).style.opacity = "1";
}

;
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
  backHeader.style.backgroundImage = `url('${urls[slideshowIndex]}')`;
  frontHeader.style.animation = `fadeout ${fadeDuration}ms forwards`;
  setTimeout(function () {
    changeImage(frontHeader, urls[slideshowIndex]);
  }, fadeDuration);

  backHeaderMobile.style.backgroundImage = `url('${urls[slideshowIndex]}')`;
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
  header.style.backgroundImage = `url('${imagePath}')`;
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    header.style.animation = `fadein ${fadeDuration}ms forwards`;
  }
}

if (frontHeader && backHeader && frontHeaderMobile && backHeaderMobile) {
  startSlideshow();
}

;
let contents = document.getElementsByClassName("accordion-section-content");
let style = document.createElement("STYLE");
for (let elem of contents) {
  let details = elem.parentElement;

  //In order to get the height of the full element, we need to open the details and remove the animation
  let oldClasses = [];
  elem.classList.forEach((item) => oldClasses.push(item));
  elem.classList = "";
  details.open = true;
  //Create seperate animations for each element because we can't just run over like we did for expanding
  style.innerText +=
    "@keyframes " +
    elem.id +
    "-retracting { from { max-height: " +
    elem.clientHeight +
    "px; padding-bottom: 15px;} to { max-height: 0px; padding-bottom: 0px; } }\n";
  details.open = false;
  oldClasses.forEach((item) => {
    elem.classList.add(item);
  });
  let chevron = details.children[0].children[1].children[0];
  //Override close behaviour
  details.children[0].onclick = (event) => {
    if (details.open) {
      //Play animation and prevent closing
      elem.style =
        "overflow: hidden; animation-name: " +
        elem.id +
        "-retracting; animation-duration: .3s; max-height: 0px; padding-bottom: 0px";
      chevron.style =
        "animation-name: chevron-rotate-back; transform: rotate(0deg);";
      //Close element when animation is done
      window.setTimeout(() => (details.open = false), 300);
      event.preventDefault();
    } else {
      elem.style = "";
      chevron.style = "";
    }
  };
}
document.head.append(style);

;
document.addEventListener("DOMContentLoaded", function () {
  const imageUrls = [
    "/images/partnerships/htt-lecture-hall.jpg",
    "/images/partnerships/connor-talking.jpg",
    "/images/partnerships/cisco-talk.jpg",
    "/images/partnerships/seminar-room-crowd.jpg",
    "/images/partnerships/kinaxis-group-talking.png",
  ];

  const fadeDuration = 500; // ms
  const displayDuration = 5000; // ms

  const front = document.getElementById("partnerships-front");
  const back = document.getElementById("partnerships-back");
  let currentIndex = 0;
  let slideshowStarted = false;

  // Preload images
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });

  function startSlideshow() {
    if (slideshowStarted) return;
    slideshowStarted = true;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % imageUrls.length;

      back.style.backgroundImage = `url('${imageUrls[currentIndex]}')`;
      front.classList.add("fade-out");

      setTimeout(() => {
        front.style.backgroundImage = `url('${imageUrls[currentIndex]}')`;
        front.classList.remove("fade-out");
      }, fadeDuration);
    }, displayDuration);
  }

  // Only start when visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startSlideshow();
          observer.disconnect(); // only start once
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(document.getElementById("partnerships-front"));
});
