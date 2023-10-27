const numeroRandom = Math.floor(Math.random() * 100) + 1;
const btnAdivinar = document.querySelector('#btnAdivinar');
let contador = 0

btnAdivinar.onclick = function verificarAdivinanza() {
    var inpAdivinanza = document.querySelector('#inpAdivinanza').value;
    var resultado = document.querySelector('#resultado');
    if (inpAdivinanza < numeroRandom) {
        contador++;
        resultado.textContent = 'El número correcto es mayor.  Número de intentos: ' + contador + '';
    } else if (inpAdivinanza > numeroRandom) {
        contador++;
        resultado.textContent = 'El número correcto es menor.  Número de intentos: ' + contador + '';
    } else {
        resultado.textContent = '¡Felicidades! El número correcto es ' + numeroRandom + '.';
    }
}

