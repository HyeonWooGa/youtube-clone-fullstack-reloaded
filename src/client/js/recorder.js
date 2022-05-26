const recordBox = document.getElementById("recordBox");
let recordBtn = document.getElementById("recordBtn");
//const startBtn = document.getElementById("startBtn");
//const video = document.getElementById("preview");

let stream;
let recorder;
let videoFile;
let video;
let startBtn;

const handleDownload = () => {
    const a = document.createElement("a");
    a.href = videoFile;
    a.download = "MyRecroding.webm";
    document.body.appendChild(a);
    a.click();

    video.remove();
    startBtn.remove();

    recordBtn = document.createElement("button");
    recordBtn.innerText = "Recording";
    recordBtn.className = recordBtn;
    recordBox.appendChild(recordBtn);

    recordBtn.addEventListener("click", initRecording);
};

const handleStop = () => {
    startBtn.innerText = "Download Recording";
    startBtn.removeEventListener("click", handleStop);
    startBtn.addEventListener("click", handleDownload);
    recorder.stop();
};

const handleStart = () => {
    
    startBtn.innerText = "Stop Recording";
    startBtn.removeEventListener("click", handleStart);
    startBtn.addEventListener("click", handleStop);
    recorder = new MediaRecorder(stream);
    console.log(recorder);
    recorder.ondataavailable = (event) => {
        console.log(event.data);
        videoFile = URL.createObjectURL(event.data);
        video.srcObject = null;
        video.src = videoFile;
        video.loop = true;
        video.play();
    };
    recorder.start();
};

const initRecording = async () => {
    video = document.createElement("video");
    startBtn = document.createElement("button");
    video.className = "preview";
    startBtn.className = "startBtn";
    recordBox.appendChild(video);
    recordBox.appendChild(startBtn);
    recordBtn.remove();
    startBtn.innerText = "Start Recording";

    stream = await navigator.mediaDevices.getUserMedia({
        audio: false, 
        video: { width: 600, height: 400},
    });
    video.srcObject = stream;
    video.play();
    startBtn.addEventListener("click", handleStart);
};

recordBtn.addEventListener("click", initRecording);