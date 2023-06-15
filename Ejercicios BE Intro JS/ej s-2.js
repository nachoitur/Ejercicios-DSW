console.log('Ejercicio S.2:');

const palabras = ['hi','hello','welcome','hi','greetings','goodmorning','hello','hi','hi','greetings','hi','welcome'];
let cadena = 'hi';

function contarVeces(palabras, cadena){
  let cant = 0;
  palabras.forEach((elemento) => {
    if(elemento == cadena) {cant += 1;}
  })
  return cant;
}

console.log('Prueba de función contarVeces(): ' + contarVeces(palabras, cadena));