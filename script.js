// Master Div
const masterDiv = document.createElement('div');
masterDiv.classList.add('container');
document.body.appendChild(masterDiv);

//Input Div
let size = 256;
makeDiv();

//Hover
drawDetect();

//Reset Button
const resetButton = document.createElement('button');
resetButton.classList.add('reset');
resetButton.innerText = 'RESET';
document.body.appendChild(resetButton);
resetButton.addEventListener('click', drawReset);


// Reset grid & size adjustment
function drawReset() {
    sizeSide = prompt('How many squares per side?');
    if (sizeSide > 100) {
        sizeSide = prompt('Choose 100 or less! How many squares per side?');
    } else {
        let userInput = document.querySelectorAll('.input');
        size = sizeSide * sizeSide;
        userInput.forEach((userDiv) => {
            userDiv.remove();
        })
        masterSize = 30 * sizeSide;
        masterDiv.style.width = `${masterSize}px`;
        masterDiv.style.height = `${masterSize}px`;
        makeDiv();
    }
    userInput = document.querySelectorAll('.input');
    drawDetect();
}

function makeDiv() {
    for (let i = 0; i < size; i++) {
        const inputDiv = document.createElement('div');
        inputDiv.classList.add('input');
        masterDiv.appendChild(inputDiv);
    }
}

function drawDetect() {
    let userInput = document.querySelectorAll('.input');
    userInput.forEach((userDiv) => {
        userDiv.addEventListener('mouseover', (e) => {
            e.srcElement.classList.add('hover');
            e.stopPropagation();
        })
    })
}