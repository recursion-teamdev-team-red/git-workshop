import { Omikuji } from '/omikuji.js';

const config = {
    startBtn : document.getElementById("start-btn"),
    topPage : document.getElementById("top-page"),
    resultPage : document.getElementById("result-page")
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
            <h1>ソフトウェア開発みくじ</h1>
        </div>
        <div class="w-90 mx-2 border-red border-gray">
            <img src="/image/${omikujiObj.resultImage}" alt="" width="200px">
            <h2 class="text-danger font-bold font3rem">${omikujiObj.luck}</h2>
        </div>
        <div class="w-90 mx-2 border-red border-gray">
            <p>${omikujiObj.resultText}</p>
        </div>
        <div class="w-90 mx-2 border-red border-gray">
            <p>✿ラッキー言語✿</p>
            <p>${omikujiObj.luckyLang}}</p>
        </div>
        <div class="w-90 mx-2 border-red border-gray">
            <p>✿ラッキーデータベース✿</p>
            <p>${omikujiObj.luckyDB}</p>
        </div>
        <div class="w-90 mx-2 border-gray">
            <p>✿ラッキーエディタ✿</p>
            <p>${omikujiObj.luckyEditor}</p>
        </div>
        <div class="my-3">
            <button id="back-btn" type="button" class="btn btn-danger rounded-pill">もう一度おみくじを引く</button>
        </div>
        <div class="my-3">
            <button id="log-btn" type="button" class="btn btn-danger rounded-pill">過去の運勢を確認する</button>
        </div>
        
    `
    container.querySelectorAll("#back-btn")[0].addEventListener("click", function(){
        displayNone(config.resultPage);
        displayBlock(config.topPage);
    });
    
    config.resultPage.append(container);
}