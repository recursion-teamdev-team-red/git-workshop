import { daikichi, tyukichi, shokichi, kichi, kyo, daikyo} from "../javascript/resultText.js";
export class Omikuji{
    static omikujiLog = [];

    constructor(){
        const luckArray = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];
        const luckyLangArray = ["Ruby", "JavaScript", "TypeScript", "Go", "Rust", "Python", "Java"];
        const luckyMuscleTrainingArray = [
            "Bulgarian squat",
            "Incline curl",
            "Twist crunch",
            "Smith machine incline bench press"
        ];
        const luckyRecursionCourseArray = [
            "初級",
            "中級",
            "上級",
            "OOP",
            "デザインパターン",
            "Git",
            "Vue.js",
            "Project4 Library App"
        ];
        const resultImageObjects = {
            "大吉": ["daikichi1.png", "daikichi2.png", "daikichi3.png"],
            "中吉": ["tyukichi1.png", "tyukichi2.png", "tyukichi3.png"],
            "小吉": ["shokichi1.png", "shokichi2.png", "shokichi3.png"],
            "吉": ["kichi1.png", "kichi2.png"],
            "凶": ["kyo1.png", "kyo2.png", "kyo3.png"],
            "大凶": ["daikyo1.png", "daikyo2.png"],
        };
        const resultTextObjects = {
            "大吉": daikichi,
            "中吉": tyukichi,
            "小吉": shokichi,
            "吉": kichi,
            "凶": kyo,
            "大凶": daikyo,
        };
        this.luck = this.getResult(luckArray);
        this.luckyLang = this.getResult(luckyLangArray);
        this.luckyMuscleTraining = this.getResult(luckyMuscleTrainingArray);
        this.luckyRecursionCourse = this.getResult(luckyRecursionCourseArray);
        this.resultImage = this.getResult(resultImageObjects[this.luck]);
        this.resultText = this.getResult(resultTextObjects[this.luck]);
        this.addResult(this);
    };

    getResult(array){
        return array[Math.floor(Math.random() * array.length)];
    };

    addResult(newLog){
        Omikuji.omikujiLog.push(newLog);
    };
}