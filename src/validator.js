const validator = {
  isValid(numero_tarjeta) {
    let digitos = numero_tarjeta.split('').reverse().map(x => parseInt(x))
    const ultimo_digito = digitos.shift();
    let suma = digitos.reduce(
      (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),
      0
    );
    suma += ultimo_digito;
    return suma % 10 === 0;
    
  },
  maskify(numero_tarjeta) {
    return numero_tarjeta.split('').map((numero, indice) => indice < numero_tarjeta.length - 4 ? '#' : numero).join('')
  }
};

export default validator;

