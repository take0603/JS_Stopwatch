let timer = document.getElementById("timer");
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonReset = document.getElementById("reset");
let msec = 0;
let secOnePlace = 0;
let secTenPlace = 0;
let secHandredPlace = 0;
let timerCount = 0;
let result = 0;

//初期表示のボタン非活性
buttonStop.disabled = true;
buttonReset.disabled = true;

//現在の秒数を表示
function showCount(){
    result = secHandredPlace + " : " + secTenPlace + " : " + secOnePlace + " : " + msec;
    timer.textContent = result;
}

//スタートクリックでカウント開始
function countStart(){
    timerCount = setInterval(countUp, 100);
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    buttonReset.disabled = true;
}

function countUp(){
    msec++;
    if (msec >= 10){
        msec = 0;
        secOnePlace++;
    } 
    if (secOnePlace >= 10){
        secOnePlace = 0;
        secTenPlace++;
    }
    if (secTenPlace >= 10){
        secTenPlace = 0;
        secHandredPlace++;
    }
    showCount();
}

//ストップクリックでカウント停止
function countStop(){
    clearInterval(timerCount);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    buttonReset.disabled = false;
}

//リセットクリックでタイマーを0
function countReset(){
    msec = 0;
    secOnePlace = 0;
    secTenPlace = 0;
    secHandredPlace = 0;
    showCount();
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    buttonReset.disabled = true;
}