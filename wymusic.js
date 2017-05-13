/* 音乐播放器控制 */
var myAudio = document.getElementById("myAudio");

var ply = document.getElementById("ply");
var voice = document.getElementById("voice");

function play(){
	if (myAudio.paused) {
		myAudio.play()
		ply.className="pause";
	}else{
		myAudio.pause()
		ply.className="ply";
	}
}


function voice1(){
	if (myAudio.muted) {
		//目前是静音
		myAudio.muted = false;
		voice.className = "voice"
	}else{
		myAudio.muted = true;
		voice.className = "voice-no"
	}
}

var vos = new Array();
vos[0] = "files/chengdu.mp3";
vos[1] = "files/ganghaoyujiann.mp3";

var nowNum = 0;

function changeVoice(num){
	if (nowNum == 0) {
		nowNum =1 ;
		
	}else{
		nowNum = 0;
	}
	myAudio.src = vos[nowNum];
	play();
	if (num == 1) {
		//下一首
	}

	if (num == -1) {
		//上一首
	}
}	



/* 视频播放器控制 */
var myVideo = document.getElementById("myVideo");
var vply = document.getElementById("vply");
var vvoice = document.getElementById("vvoice");
function vplay(){
	if (myVideo.paused) {
		myVideo.play()
		vply.className="vpause";
	}else{
		myVideo.pause()
		vply.className="vply";
	}
}

function vvoice1(){
	if (myVideo.muted) {
		//目前是静音
		myVideo.muted = false;
		vvoice.className = "vvoice"
	}else{
		myVideo.muted = true;
		vvoice.className = "vvoice-no"
	}
}