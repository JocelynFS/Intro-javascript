const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];


  const esMayor = (edad) =>{
    if (edad >= 18){
        return true;
    } else {
        return false;
    }
}

function esFamilia(arreglo){
  let result;
  for (let i = 0; i < arreglo.lenght; i++){
    if (arreglo[i].esFamiliar === true) return true;
  }
  return false;
}

ejercicio2.forEach( persona => {
  if(esMayor(persona) === true  & esFamilia(persona) === true){
    console.log("%s puede pasar", persona)
  }
});



/*const admitido = persona => {
    const mayor = esMayor(persona.edad);
    if(persona.edad>= 18 && mayor === true ){
        console.log(persona.nombre + persona.apellido + "puede pasar")
    }else{
        false;
    }
  }

 ejercicio2.forEach(admitido());

 const esPrimo = numero => {
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  return true;
}

ejercicio1.forEach(numero => {
  if (esPrimo(numero) === true)
  console.log("%d es primo", numero);
});*/