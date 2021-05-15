globalTimeout = null;

function hideUnneededContent(container){
    accContents = document.getElementsByClassName("actual_content");
    for (var i = 0; i < accContents.length; i++){
        if (accContents[i].id !== container){
            accContents[i].style.marginTop = "-300px";
            accContents[i].style.position = "fixed";
        }
    }
}

function resizeContent(container, blocks, lefts, rights){
    hideUnneededContent(container);
    left = document.getElementsByClassName(lefts);
    right = document.getElementsByClassName(rights);
    block = document.getElementsByClassName(blocks);
    accContent = document.getElementById(container);
    for (var i = 0; i < block.length; i++){
        block[i].style.height = "150px";
        left[i].style.height = "150px";
        right[i].style.height = "150px";
    }
    accContent.style.marginTop = "-10px"
    accContent.style.position = "relative";
    setTimeout(showContent(container), 1000);
}

function showContent(container){
    document.getElementById(container).style.animation = "fadein 500ms forwards" //Times can be easily changed
}

function hideContent(container, blocks, lefts, rights){
    document.getElementById(container).style.animation = "fadeout 300ms forwards"
    globalTimeout = setTimeout(function(){ shrinkContent(container, blocks, lefts, rights) }, 310)
}

function shrinkContent(container, blocks, lefts, rights){
        left = document.getElementsByClassName(lefts)
        right = document.getElementsByClassName(rights);
        block = document.getElementsByClassName(blocks);
        accContent = document.getElementById(container);
        for (var i = 0; i < block.length; i++){
            block[i].style.height = "1px";
            left[i].style.height = "1px";
            right[i].style.height = "1px";
        }
        accContent.style.marginTop = "-300px";
        accContent.style.position = "fixed";
}

function keepContent(container, blocks, lefts, rights){
    clearTimeout(globalTimeout)
    document.getElementById(container).style.animationPlayState = 'paused'
}