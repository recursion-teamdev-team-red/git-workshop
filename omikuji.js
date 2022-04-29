export class Omikuji{
    static omikujiLog = [];
    static luckArray = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];
    static luckyLangArray = ["Ruby", "JavaScript", "TypeScript", "Go", "Rust"];
    static luckyDBArray = ["MySQL", "Oracle"];
    static luckyEditorArray = ["VSCode", "Vim", "memo"];
    static resultImageObjects = {
        "大吉": ["daikichi1.png", "daikichi2.png", "daikichi3.png"],
        "中吉": ["tyukichi1.png", "tyukichi2.png", "tyukichi3.png"],
        "小吉": ["shokichi1.png", "shokichi2.png", "shokichi3.png"],
        "吉": ["kichi1.png", "kichi2.png"],
        "凶": ["kyo1.png", "kyo2.png", "kyo3.png"],
        "大凶": ["daikyo1.png", "daikyo2.png"],
    };

    constructor(){
        this.luck = this.getResult(Omikuji.luckArray);
        this.luckyLang = this.getResult(Omikuji.luckyLangArray);
        this.luckyDB = this.getResult(Omikuji.luckyDBArray);
        this.luckyEditor = this.getResult(Omikuji.luckyEditorArray);
        this.resultImage = this.getResult(Omikuji.resultImageObjects[this.luck]);
        this.addResult(this);
    };

    getResult(array){
        return array[Math.floor(Math.random() * array.length)];
    };

    addResult(newLog){
        Omikuji.omikujiLog.push(newLog);
    };
}