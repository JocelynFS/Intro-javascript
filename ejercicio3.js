function susFibonacci(numero){
    let ini=[0, 1];
    for(let i = 2; i < numero; i++){
        ini[i] = ini[i-2] + ini[i-1]
        console.log(ini[i]);
    }
    return numero;
}

susFibonacci(52);