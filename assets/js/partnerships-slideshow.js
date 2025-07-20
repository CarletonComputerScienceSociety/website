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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startSlideshow();
        observer.disconnect(); // only start once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.getElementById("partnerships-front"));
});
