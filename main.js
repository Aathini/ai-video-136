video = "";
function preload() {

    video = createVideo('video.mp4');
}
function setup() {
    canvas = createCanvas(400,250);
    canvas.center();
    video.hide();
}
function draw() {
    image(video, 0, 0, 400, 250);
}
function Start() {
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Objects detecting..";
}
function modelLoaded() {
    console.log("Model has been loaded");
    video.loop();
    video.speed(1);
    video.volume(1);
}