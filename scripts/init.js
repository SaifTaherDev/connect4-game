const canvas = document.body.querySelector("#canvasOne");
const ctxOne = canvas.getContext("2d");
const canvasTwo = document.body.querySelector("#canvasTwo");
const ctxTwo = canvasTwo.getContext("2d");
const img = document.body.querySelector("img");
const inputOne = document.body.querySelector("#inputOne");
const inputTwo = document.body.querySelector("#inputTwo");
canvas.width = 0.55 * screen.width;
canvas.height = canvas.width;
canvasTwo.width = 0.55 * screen.width;
canvasTwo.height = canvasTwo.width;
const CW = canvas.width;
const CH = canvas.height;
const mousePosXCorrection = (screen.width / 2) - (canvas.width / 2);
const mousePosYCorrection = (screen.height / 2) - (canvas.height / 2);
canvas.style.left = mousePosXCorrection + "px";
canvas.style.top = mousePosYCorrection + "px";
canvasTwo.style.left = mousePosXCorrection + "px";
canvasTwo.style.top = mousePosYCorrection + "px";
let selectedCol, selectedRow;
let playerCounter = 0;
let streak, avaliblePosY, slowDownFactor;
let winCirclesCoords = [[0, 0], [0, 0], [0, 0], [0, 0]];
let circleArr = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
let squareArr = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
let winMusic = new Howl({
    src:"audio/winMusic.mp3",
    volume: 1
});
winMusic.volume = 0;
winMusic.play();
setTimeout(function () { winMusic.pause(); }, 100);