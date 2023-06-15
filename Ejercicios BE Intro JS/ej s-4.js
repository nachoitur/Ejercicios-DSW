console.log('Ejercicio S.4:');

const saludos = ['hi','hello','welcome','greetings','goodmorning'];

const cadena1 = 'hola';
const cadena2 = 'hi';

function chequea(arreglo, cadena) {
  let band = false, guardo;
  arreglo.forEach((elemento, i) => {
    if (elemento == cadena){
      guardo = i+1;
      band = true;
    }
  });
  if (band){
    return guardo;
  } else {
    arreglo.push(cadena);
    return ('Se agrega un nuevo elemento con posición en '+ arreglo.length);
  }
}

console.log('Segunda cadena prueba: ' + chequea(saludos, cadena2));
console.log('Primera cadena prueba: ' + chequea(saludos, cadena1));