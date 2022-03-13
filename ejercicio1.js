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
