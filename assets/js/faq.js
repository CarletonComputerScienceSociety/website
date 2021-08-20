/*$(document).ready(function () {
  $(".accordion-section-title").click(function (e) {
    var currentAttrvalue = $(this).attr("href");
    if ($(e.target).is(".active")) {
      $(this).removeClass("active");
      $(".accordion-section-content:visible").slideUp(300);
    } else {
      $(".accordion-section-title")
        .removeClass("active")
        .filter(this)
        .addClass("active");
      $(".accordion-section-content")
        .slideUp(300)
        .filter(currentAttrvalue)
        .slideDown(300);
    }
  });
  // http://jsfiddle.net/koala_dev/3v2egwfs/7/
  $(".rotate").click(function () {
    $(this).toggleClass("down");
  });
});*/
