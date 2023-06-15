console.log('Ejercicio S.5:');

let frase="materias aprobadas 3 habiendo rendido 4 veces";

function aprobar() {
  var r = /\d+/g;
  var m = frase.match(r);
  ++m[0];
  console.log(m);
  //console.log(frase.replace(r, m[0]));
}

function reprobar() {
  const r = /\d+/;
  var m = frase.match(r);
  
  console.log(m);
  //console.log(frase.replace(r, m[0], m[1]));
}

reprobar();