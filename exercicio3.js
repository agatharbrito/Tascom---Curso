// Criação de Variáveis
const produtoA = "Vinho";
let estoqueA = 43;
let precovendaA = 69.49;

estoqueA = estoqueA - 20;
precovendaA = precovendaA * 0.9;

console.log(`Nome do produto: ${produtoA}`);
console.log(`O novo estoque do produto e: ${estoqueA}`);
console.log(`O novo preço de venda do produto e: ${precovendaA.toFixed(2)}`);
