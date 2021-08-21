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
