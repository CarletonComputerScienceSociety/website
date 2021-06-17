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
  document.getElementById(container).style.pointerEvents = "auto"
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
