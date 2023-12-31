let timer = document.getElementById("timer");
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonReset = document.getElementById("reset");
let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timerCount = 0;
let result = 0;

//初期表示のボタン非活性
buttonStop.disabled = true;
buttonReset.disabled = true;

//現在の秒数を表示
function showCount(){
	result = hour + " : " + min + " : " + sec + " : " + msec;
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
		sec++;
	}
	if (sec >= 60){
		sec = 0;
		min++;
	}
	if (min >= 60){
		min = 0;
		hour++;
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
	sec = 0;
	min = 0;
	hour = 0;
	showCount();
	buttonStart.disabled = false;
	buttonStop.disabled = true;
	buttonReset.disabled = true;
}