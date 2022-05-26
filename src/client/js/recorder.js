const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

let stream;

const handleStop = () => {
    startBtn.innerText = "Start Recording";
    startBtn.removeEventListener("click", handleStop);
    startBtn.addEventListener("click", handleStart);
};

const handleStart = () => {
    startBtn.innerText = "Stop Recording";
    startBtn.removeEventListener("click", handleStart);
    startBtn.addEventListener("click", handleStop);
    const recorder = new MediaRecorder(stream);
    console.log(recorder);
    recorder.ondataavailable = (event) => {
        console.log("recording done");
        console.log(event);
        console.log(event.data);
    };
    recorder.start();
    console.log(recorder);
    setTimeout(() => {
        recorder.stop();
    }, 10000);
};

const init = async () => {
    stream = await navigator.mediaDevices.getUserMedia({
        audio: false, 
        video: { width: 600, height: 400},
    });
    video.srcObject = stream;
    video.play();
};

init();

startBtn.addEventListener("click", handleStart);