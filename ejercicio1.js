const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];

  const esPrimo = numero => {
    for (let x = 2; x < numero / 2; x++) {
      if (numero % x == 0) return false;
    }
    return true;
  }
  
  ejercicio1.forEach(numero => {
    if (esPrimo(numero) === true)
    console.log("%d es primo", numero);
  });







/*function esPrimo(numero){
  for(let i=2; i<=numero/2; i++){
    if(numero % i === 0){
      let noesprimo = numero;
    }else{
      console.log(numero +" es primo");

    }
}
}

ejercicio1.forEach(esPrimo);
*/

/*for(let j = 0; j < ejercicio1.length; j++){
  if(esPrimo(ejercicio1[j]) === true){
    console.log("El número " + ejercicio1[j] + " es primo");
  }
};*/

/*for(let i=2; i <= ejercicio1.length; i++){
    if(ejercicio1[i] % i === 0){
        ejercicio1[i];
    }else{
        console.log(ejercicio1[i] + " es primo");
    }
    
};*/

/*const esPrimo = numero => {
      for(let i=2; i <= numero; i++)
      if(numero % i != 0){
        console.log(numero + " es primo")
      }
  };*/

/*const arreglo = ["Jesús", "Juan", "María", "Ramón"]
console.log(arreglo);
console.log(arreglo[2]);
for( let indice = 0; indice < arreglo.length; indice++){
    console.log('El nombre de la persona es ' + arreglo[indice]);
}


ejercicio1.forEach(esPrimo());*/
  


  