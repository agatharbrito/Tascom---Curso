const somar = (numeros) => {
  let soma = 0;
  let contador = 0;
  while (contador < numeros.length) {
    soma = soma + numeros[contador];
    contador++;
  }
  return soma;
};

console.log(somar([1, 2, 3, 4, 5]));
