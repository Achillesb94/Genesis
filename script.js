let order =[];
let clickedorder =[];
let score =0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
//* cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedorder = [];

    for(let i in order) {
        let elementeColor = createColorElement(order[i]);
        lightColor(elementeColor, Number(i + 1));

    }

}
// acende a proxima cor    
let lightColor = (elemente, number) => {
    number = number * 500;
    setTimeout(() =>{
        elemente.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        elemente.classList.remove('selected')
    });
}
// checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedorder) {
        if(clickedorder [i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedorder.length == order.length) {
        alert(`Pontuação: ${score}\nVoce acertou! Iniciando Proximo Nivel!`);
        nextLevel();
    }
}

//função para o clique do usuario
let click = (color) => {
    clickedorder [clickedorder.length] = color;
    elementeColorElement(color).classList.add('selected');

    setTimeout(() => {
        elementeColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
    

}

//função que retona a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

//função para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();

}

//caso o jogador tenha perdido (função para game over)
let lose = () => {
    alert(`Pontuação ${score}!\nVocê perdeu o Jogo\n Clique em Ok para iniciar um novo jogo`);
    order = [];
    clickedorder = [];

    playgame();
}

let playgame = () =>{
    alert ('Bem vindo ao Genesis! Iniciando um novo jogo')
    score = 0;

    nextLevel();
}
// evento de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Ativar o clique das cores

green.addEventListener('click' , click(0));
red.addEventListener('click' , click(1));
yellow.addEventListener('click' , click(2));
blue.addEventListener('click' , click(3));
//inicio do jogo
playgame();
