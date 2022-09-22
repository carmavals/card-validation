import validator from './validator.js';
//accediendo al input text


let valorDom = document.getElementById('numero')
let numero = valorDom.value

valorDom.innerHTML = validator.maskify(numero)

let input = document.getElementById('numero')
input.addEventListener('keypress', function (evento_Enter) {
    if (evento_Enter.key === 'Enter') {
        evento_Enter.preventDefault()
        document.getElementById('submit').click()
    }
})

if (validator.isValid(numero) === true) {
    let tarjeta_valida = document.createElement('div')
    tarjeta_valida.setAttribute('div', 'tarjetaValida')
    let div_tarjeta = document.querySelector('.tarjeta')
    div_tarjeta.appendChild(tarjeta_valida)
} else {
    let tarjeta_invalida = document.createElement('div')
    tarjeta_invalida.setAttribute('div', 'tarjetaInvalida')
    let div_tarjeta = document.querySelector('.tarjeta')
    div_tarjeta.appendChild(tarjeta_invalida)

}


console.log(numero)
console.log(valorDom)
console.log(input)
console.log(evento_Enter)
console.log(validator);
