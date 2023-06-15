console.log('Ejercicio O.2:');

const objeto = {
  caracteristica1: 'Algo',
  caracteristica2: 'Random',
};

function cadena(objeto){
  if(objeto != null){
    console.log(typeof objeto);
    cadena(objeto.__proto__);
  }
  else {
    console.log(objeto);
  };
}

cadena(objeto);