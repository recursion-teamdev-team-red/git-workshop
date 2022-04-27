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
