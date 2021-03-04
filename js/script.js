let order = [];
let clickedOrder = [];
let score = 0;

// 0 - amarelo
// 1 - azul
// 2 - verde
// 3 - vermelho

const yellow = document.querySelector('.amarelo');
const blue = document.querySelector('.azul');
const green = document.querySelector('.verde');
const red = document.querySelector('.vermelho');

// seleciona ordem aleatória
let shuffleOrder = () => {
    colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// acende proxima cor.
let lightColor = (element, number) => {
    number = number * 600;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 400);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number -50);
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// clique do jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

// Retorna a Cor
let createColorElement = (color) => {
    if(color == 0) {
        return yellow;
    }else if (color == 1) {
        return blue;
    }else if (color == 2) {
        return green;
    }else if (color == 3) {
        return red;
    }
}

// subir Level
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Game Over
let gameOver = () => {
    alert(`Pontuação: ${score -1}!\n POXA, VOCE ERROU! INICAR NOVO JOGO?`);
    order = [];
    clickedOrder = [];

    iniciarJogo();
}

// Comecar jogo
let iniciarJogo = () =>{
    alert(`BEM VINDO A GENIUS! INICAR NOVO JOGO?`);
    score = 0;
    nextLevel();
}

yellow.onclick= () => click(0);
blue.onclick= () => click(1);
green.onclick= () => click(2);
red.onclick= () => click(3);

iniciarJogo();
