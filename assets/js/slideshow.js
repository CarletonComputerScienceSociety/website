let index = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dots");
    let captions = document.getElementsByClassName("description");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        captions[i].style.display = "none";
    }
    index++;

    if (index > slides.length) {
        index = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index - 1].style.display = "block";
    captions[index - 1].style.display = "block";
    dots[index - 1].className += " active";
    setTimeout(showSlides, 5000);
}
