const config = {
    startBtn : document.getElementById("start-btn"),
    backBtn : document.getElementById("back-btn"),
    topPage : document.getElementById("top-page"),
    result : document.getElementById("result")
}

function displayBlock(target){
    target.classList.remove("d-none");
    target.classList.add("d-block");
}

function displayNone(target){
    target.classList.remove("d-block");
    target.classList.add("d-none");
}

config.startBtn.addEventListener("click", function(){
    displayNone(config.topPage);
    displayBlock(config.result);
});

config.backBtn.addEventListener("click", function(){
    displayNone(config.result);
    displayBlock(config.topPage);
});