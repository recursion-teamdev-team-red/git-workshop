import { Omikuji } from '../javascript/omikuji.js';

const config = {
    startBtn : document.getElementById("start-btn"),
    topPage : document.getElementById("top-page"),
    resultPage : document.getElementById("result-page"),
    logPage : document.getElementById("log-page")
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
    displayBlock(config.resultPage);
    let omikuji = new Omikuji();
    createResultPage(omikuji);
});

function createResultPage(omikujiObj){
    config.resultPage.innerHTML = ``;
    let container = document.createElement("div");
    container.classList.add("frame", "bg-white", "d-flex", "justify-content-center", "align-items-center", "flex-column", "mx-auto", "text-center", "text-danger");
    container.innerHTML = `
        <div class="w-90 mx-2 border-red">
            <h1 class="my-3 font1rem font-bold">ソフトウェア開発みくじ</h1>
        </div>
        <div class="w-90 mx-2 border-red border-gray">
            <img src="image/${omikujiObj.resultImage}" class="mt-3" alt="" width="200px">
            <h2 class="text-danger font-bold font4rem mb-3">${omikujiObj.luck}</h2>
        </div>
        <div class="w-90 mx-2 border-red border-gray">
            <p class="my-3">${omikujiObj.resultText}</p>
        </div>
        <div class="w-90 mx-2 border-red border-gray">
            <p class="my-3">✿ラッキー言語✿</p>
            <p class="my-3">${omikujiObj.luckyLang}</p>
        </div>
        <div class="w-90 mx-2 border-red border-gray">
            <p class="my-3">✿ラッキー筋トレ✿</p>
            <p>${omikujiObj.luckyMuscleTraining}</p>
        </div>
        <div class="w-90 mx-2 border-gray">
            <p class="my-3">✿ラッキーRecurionコース✿</p>
            <p class="my-3">${omikujiObj.luckyRecursionCourse}</p>
        </div>
        <div class="my-2 w-100">
            <button id="back-btn" type="button" class="btn btn-danger rounded-pill w-70">もう一度おみくじを引く</button>
        </div>
        <div class="mb-3 w-100">
            <button id="log-btn" type="button" class="btn btn-danger rounded-pill w-70">過去の運勢を確認する</button>
        </div>
    `
    container.querySelectorAll("#back-btn")[0].addEventListener("click", function(){
        displayNone(config.resultPage);
        displayBlock(config.topPage);
    });

    container.querySelectorAll("#log-btn")[0].addEventListener("click", function(){
        displayNone(config.resultPage);
        displayBlock(config.logPage);
        createLogPage(Omikuji.omikujiLog);
    });

    config.resultPage.append(container);
}

function createLogPage(omikujiLog){
    config.logPage.innerHTML = ``;
    let container = document.createElement("div");
    container.classList.add("frame", "bg-white", "d-flex", "justify-content-center", "align-items-center", "flex-column", "mx-auto", "text-center", "text-danger");
    container.innerHTML = `
        <div class="w-90 mx-2 border-red">
            <h1>ソフトウェア開発みくじ</h1>
            <h3>過去${omikujiLog.length}回分の履歴</h3>
        </div>
        `
    for(let i = 0; i < omikujiLog.length; i++){
        container.innerHTML += `
        <div class="w-90 mx-2 border-red border-gray">
            <p class="font1q5rem">${i + 1}回目</p>
            <p class="omikuji-log">${omikujiLog[i]["luck"]}</p>
        </div>
        `
    }
    container.innerHTML += `
        <div class="my-3">
            <button id="top-btn" type="button" class="btn btn-danger rounded-pill">トップページに戻る</button>
        </div>
    `
    container.querySelectorAll("#top-btn")[0].addEventListener("click", function(){
        displayNone(config.logPage);
        displayBlock(config.topPage);
    });

    for(let i = 0; i < container.querySelectorAll(".omikuji-log").length; i++){
        container.querySelectorAll(".omikuji-log")[i].addEventListener("click", function(){
            displayNone(config.logPage);
            displayBlock(config.resultPage);
            createResultPage(omikujiLog[i]);
        });
    }
    config.logPage.append(container);
}