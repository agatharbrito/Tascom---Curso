const chalk = require("chalk");
const prompt = require("prompt-sync")({ sigint: true });

console.log(chalk.blue("--------------Calculadora--------------"));

let operacao = 0;

do {
  console.log(chalk.green("Qual operação você deseja fazer?"));

  console.log(chalk.green("1 - adição"));

  console.log(chalk.green("2 - subtração"));

  console.log(chalk.green("3 - multiplicação"));

  console.log(chalk.green("4 - divisão"));

  operacao = prompt("Digite o número da operação: ");

  if (
    operacao != "1" &&
    operacao != "2" &&
    operacao != "3" &&
    operacao != "4"
  ) {
    console.log(chalk.red("Opção inválida"));
    continue;
  }

  let primeiroNumero = prompt("Digite o primeiro número: ");
  let segundoNumero = prompt("Digite o segundo número: ");

  let resultado = 0;

  switch (operacao) {
    case "1":
      resultado = parseFloat(primeiroNumero) + parseFloat(segundoNumero);
      break;
    case "2":
      resultado = parseFloat(primeiroNumero) - parseFloat(segundoNumero);
      break;
    case "3":
      resultado = parseFloat(primeiroNumero) * parseFloat(segundoNumero);
      break;
    case "4":
      resultado = parseFloat(primeiroNumero) / parseFloat(segundoNumero);
      break;
  }
  console.log(chalk.green(`O resultado é: ${resultado}`));
} while (
  operacao != "1" &&
  operacao != "2" &&
  operacao != "3" &&
  operacao != "4"
);
