console.log('Ejercicio S.3:');

function hola(){return('Esta es una función')};
const saludo = {primero:'Hola!', segundo:'Que tal estás?'};

const valores = ['hi',2,189.45,true,'goodmorning',undefined,false,hola(),'greetings',saludo];
const cadena = 'object';

function devolverArreglo(valores, cadena) {
  const nuevosValores = [];
  valores.forEach((elemento, i) => {
    if(typeof elemento == cadena){
      nuevosValores.push(elemento);
    }
  })
  return nuevosValores;
}

console.log(devolverArreglo(valores, cadena));