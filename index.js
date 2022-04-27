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

// ------------処理関数---------------
// 運勢
function getLuck(){
    const luckArray = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];
    return luckArray[Math.floor(Math.random() * luckArray.length)];
}

// 言語
function getLuckyLang(){
    const luckyLangArray = ["Ruby", "JavaScript", "TypeScript", "Go", "Rust"];
    return luckyLangArray[Math.floor(Math.random() * luckyLangArray.length)];
}

// DB
function getLuckyDB(){
    const luckyDBArray = ["MySQL", "Oracle"];
    return luckyDBArray[Math.floor(Math.random() * luckyDBArray.length)];
}

// editor
function getLuckyEditor(){
    const luckyEditorArray = ["VSCode", "Vim", "memo"];
    return luckyEditorArray[Math.floor(Math.random() * luckyEditorArray.length)]
}