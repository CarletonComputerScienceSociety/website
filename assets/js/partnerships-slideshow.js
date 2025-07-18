document.addEventListener("DOMContentLoaded", function () {
  var partnershipUrls = [
    "/images/partnerships/htt-lecture-hall.png",
    "/images/partnerships/kinaxis_presentation.png",
    "/images/partnerships/cisco-talk.png",
    "/images/partnerships/big-group-seminar-room.png",
    "/images/partnerships/kinaxis-group-talking.png",
    "/images/partnerships/jobuary_panel.png",
  ];

  const partnershipFadeDuration = 500; // ms (match CSS)
  const partnershipImageTransitionDuration = 5000; // ms

  var partnershipsFront = document.getElementById("partnerships-front");
  var partnershipsBack = document.getElementById("partnerships-back");
  var partnershipSlideshowIndex = 0;
  var slideshowStarted = false;
  var observer;

  // Preload all images
  function preloadImages(urls, callback) {
    let loaded = 0;
    let total = urls.length;
    urls.forEach(function (url) {
      const img = new Image();
      img.onload = img.onerror = function () {
        loaded++;
        if (loaded === total) callback();
      };
      img.src = url;
    });
  }

  function startPartnershipsSlideshow() {
    if (slideshowStarted) return;
    slideshowStarted = true;
    partnershipsFront.style.backgroundImage = `url('${partnershipUrls[0]}')`;
    partnershipsBack.style.backgroundImage = `url('${partnershipUrls[0]}')`;
    partnershipsFront.classList.remove("fadeout");
    partnershipsFront.classList.add("fadein");
    function nextSlide() {
      partnershipSlideshowIndex =
        (partnershipSlideshowIndex + 1) % partnershipUrls.length;
      partnershipsBack.style.backgroundImage = `url('${partnershipUrls[partnershipSlideshowIndex]}')`;
      partnershipsFront.classList.remove("fadein");
      partnershipsFront.classList.add("fadeout");
      setTimeout(function () {
        partnershipsFront.style.backgroundImage = `url('${partnershipUrls[partnershipSlideshowIndex]}')`;
        partnershipsFront.classList.remove("fadeout");
        partnershipsFront.classList.add("fadein");
      }, partnershipFadeDuration);
      setTimeout(nextSlide, partnershipImageTransitionDuration);
    }
    setTimeout(nextSlide, partnershipImageTransitionDuration);
  }

  if (partnershipsFront && partnershipsBack) {
    preloadImages(partnershipUrls, function () {
      observer = new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting) {
            startPartnershipsSlideshow();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(partnershipsFront);
    });
  } else {
    console.error("Partnerships slideshow elements not found.");
  }
});
