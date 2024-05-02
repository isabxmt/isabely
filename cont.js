const B = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-cont');

for(let i = 0; i < B.length; i++){
    console.log(i);
    B[i].onclick = function(){

     for(let j = 0; j < B.length; j++){
        B[j].classList.remove('select-1');
        textos[j].classList.remove('select-2');
     }

    B[i].classList.add('select-1');
    textos[i].classList.add('select-2');
    }
}
const contadores = document.querySelectorAll('.contador');
let tempoAtual = new Date();
let tempoObjetivo1 = new Date ('2025-04-30T00:00:00');
let tempoObjetivo2 = new Date ('2026-05-30T00:00:00');

let tempos = [tempoObjetivo1, tempoObjetivo2,];

for(let i =0; i< contadores.length; i++){
    contadores[i].textContent = CalculaTempo(tempos[i]);
}

function CalculaTempo(tempoObjetivo){
    let TempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(TempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
};