document.addEventListener("DOMContentLoaded", function () {
  var partnershipUrls = [
    "/images/partnerships/htt-lecture-hall.png",
    "/images/partnerships/kinaxis_presentation.png",
    "/images/partnerships/cisco-talk.png",
    "/images/partnerships/big-group-seminar-room.png",
    "/images/partnerships/kinaxis_group_talking.png",
    "/images/partnerships/jobuary_panel.png",
  ];

  const partnershipFadeDuration = 500; // ms
  const partnershipImageTransitionDuration = 5000; // ms

  var partnershipsFront = document.getElementById("partnerships-front");
  var partnershipsBack = document.getElementById("partnerships-back");
  var partnershipSlideshowIndex = 0;
  var slideshowStarted = false;
  var observer;

  function startPartnershipsSlideshow() {
    if (slideshowStarted) return;
    slideshowStarted = true;
    // Set initial images
    partnershipsFront.style.backgroundImage = `url('${partnershipUrls[0]}')`;
    partnershipsBack.style.backgroundImage = `url('${partnershipUrls[0]}')`;

    function nextSlide() {
      partnershipSlideshowIndex =
        (partnershipSlideshowIndex + 1) % partnershipUrls.length;
      partnershipsBack.style.backgroundImage = `url('${partnershipUrls[partnershipSlideshowIndex]}')`;
      partnershipsFront.style.animation = `fadeout ${partnershipFadeDuration}ms forwards`;
      setTimeout(function () {
        changePartnershipsImage(
          partnershipsFront,
          partnershipUrls[partnershipSlideshowIndex]
        );
      }, partnershipFadeDuration);
      setTimeout(function () {
        partnershipsFront.style.animation = `fadein ${partnershipFadeDuration}ms forwards`;
      }, partnershipFadeDuration);
      setTimeout(nextSlide, partnershipImageTransitionDuration);
    }

    function changePartnershipsImage(header, imagePath) {
      header.style.backgroundImage = `url('${imagePath}')`;
    }

    setTimeout(nextSlide, partnershipImageTransitionDuration);
  }

  if (partnershipsFront && partnershipsBack) {
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
  } else {
    console.error("Partnerships slideshow elements not found.");
  }
});
