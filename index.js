// ------------実行関数---------------
function resultOnButton(){
    const luck = getLuck();
    const luckyLang = getLuckyLang();
    const luckyDB = getLuckyDB();
    const luckyEditor = getLuckyEditor();
    const home = document.getElementById("home");
    const result = document.getElementById("result");
    const resultLuck = document.getElementById("result-luck");
    const resultLang = document.getElementById("result-lang");
    const resultDB = document.getElementById("result-DB");
    const resultEditor = document.getElementById("result-editor");
    resultLuck.innerHTML = luck;
    resultLang.innerHTML = luckyLang;
    resultDB.innerHTML = luckyDB;
    resultEditor.innerHTML = luckyEditor;
    home.classList.add("d-none");
    result.classList.remove("d-none");
    console.log(result);
    console.log("on!!");
}

function resultOffButton(){
    const home = document.getElementById("home");
    const result = document.getElementById("result");
    home.classList.remove("d-none");
    result.classList.add("d-none");
    console.log("off!!");
}

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