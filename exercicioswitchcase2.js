// conversao de nota em conceito

let nota = 5;
let conceito;

switch (nota) {
case: nota >= 0 || nota <=3:
  conceito = "conceito E"
  break;
case: nota >= 4 || nota <=6:
  conceito = "conceito D"
  break;
case: nota >= 7 || nota <=8:
  conceito = "conceito C"
  break;
case: 9:
  conceito = "conceito B"
  break;
case: 10:
  conceito = "conceito A"
  break;

  default :
  mensagem = "Nota Invalida";
  break;
}

console.log(o conceito tem: $(conceito});