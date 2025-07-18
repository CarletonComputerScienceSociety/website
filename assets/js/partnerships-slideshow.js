document.addEventListener("DOMContentLoaded", function () {
  var partnershipUrls = [
    "/images/general/workshops.jpg",
    "/images/general/lounge.jpg",
    "/images/general/orientation_2017.jpg",
    "/images/general/orientation_2018.jpg",
  ];

  const partnershipFadeDuration = 500; // ms
  const partnershipImageTransitionDuration = 5000; // ms

  var partnershipsFront = document.getElementById("partnerships-front");
  var partnershipsBack = document.getElementById("partnerships-back");
  var partnershipSlideshowIndex = 0;

  // Set initial images
  if (partnershipsFront && partnershipsBack) {
    partnershipsFront.style.backgroundImage = `url('${partnershipUrls[0]}')`;
    partnershipsBack.style.backgroundImage = `url('${partnershipUrls[0]}')`;

    function startPartnershipsSlideshow() {
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
      setTimeout(
        startPartnershipsSlideshow,
        partnershipImageTransitionDuration
      );
    }

    function changePartnershipsImage(header, imagePath) {
      header.style.backgroundImage = `url('${imagePath}')`;
    }

    // Wait 5 seconds before first transition
    setTimeout(startPartnershipsSlideshow, partnershipImageTransitionDuration);
  } else {
    console.error("Partnerships slideshow elements not found.");
  }
});
