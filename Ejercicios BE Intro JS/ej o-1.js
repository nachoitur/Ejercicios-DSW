console.log('Ejercicio O.1:');

grades = [
	{ studentId: 66666, grade: 6 },
	{ studentId: 12345, grade: 9 },
	{ studentId: 66666, grade: 8 },
	{ studentId: 12345, grade: 1 },
]

function calculaPromedio(notas) {
  promedios = [{studentId: 66666}];
  notas.forEach((nota) => {
    if(nota.studentId in promedios.studentId){
      console.log('puto');
    }
  })
  return promedios;
}

console.log(calculaPromedio(grades));