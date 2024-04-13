// geracao de sequencia Fibonacci
function gerarSequenciaFibonacci(n) {
  let numero1 = 0;
  let numero2 = 1;
  let contador = 0;

  while (contador < n) {
    console.log(numero1);
    let numero3 = numero1 + numero2;
    numero1 = numero2;
    numero2 = numero3;
    contador++;
  }
}

gerarSequenciaFibonacci(10);
