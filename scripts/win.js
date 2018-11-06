function slowDownWin() {
    let intervalCounter = 0;
    if (selectedRow == 5) {
        slowDownFactor = 4.5
    } else if (selectedRow == 4) {
        slowDownFactor = 3.8
    } else if (selectedRow == 3) {
        slowDownFactor = 3.7
    } else if (selectedRow == 2) {
        slowDownFactor = 3.5
    } else if (selectedRow == 1) {
        slowDownFactor = 2.5
    }
    let winInterval = setInterval(function () {
        if (selectedRow != 0) {
            circleArr[selectedCol][5 - selectedRow].accel = Math.max((((avaliblePosY - circleArr[selectedCol][5 - selectedRow].posY) / 2100) * 16.6666666), (selectedRow / slowDownFactor));
        } else {
            circleArr[selectedCol][5 - selectedRow].accel = 0.3;
        }
        intervalCounter++;
        if (intervalCounter > 2100) {
            clearInterval(winInterval);
        }
    }, 1);
    winMusic.volume = 1;
    winMusic.play();    
}

function winGlow() {
    for (let counter = 0; counter < 7; counter++) {
        for (let counterTwo = 0; counterTwo < 6; counterTwo++) {
            if (squareArr[counter][5 - counterTwo].hasCircle) {
                circleArr[counter][counterTwo].posX = squareArr[counter][5 - counterTwo].posX + (squareArr[counter][5 - counterTwo].width / 2);
                circleArr[counter][counterTwo].posY = squareArr[counter][5 - counterTwo].posY + (squareArr[counter][5 - counterTwo].height / 2);
            }
        }
    }
    setTimeout(function () {
        for (let subArr of winCirclesCoords) {
            circleArr[subArr[0]][5 - subArr[1]].travelBool = false;
            circleArr[subArr[0]][5 - subArr[1]].glowBool = false;
            circleArr[subArr[0]][5 - subArr[1]].deGlowBool = false;
            circleArr[subArr[0]][5 - subArr[1]].glowCounter = 0;
            circleArr[subArr[0]][5 - subArr[1]].deGlowCounter = 50;
            circleArr[subArr[0]][5 - subArr[1]].active = true;
        }
    }, 200)
}