const media = (numeros) => {
  let media = 0;
  let contador = 0;
  while (contador < numeros.length) {
    media = media + numeros[contador];
    contador++;
  }
  return media / numeros.length;
};

console.log(media([10, 20, 30, 40, 50]));
