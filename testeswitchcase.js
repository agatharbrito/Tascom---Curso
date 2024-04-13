//Verificacao de dias da semana

const diaSemana = (dia) => {
  switch (dia) {
    case 1:
      return "domingo";
    case 2:
      return "segunda - feira";
    case 3:
      return "terça - feira";
    case 4:
      return "quarta - feira";
    case 5:
      return "quinta - feira";
    case 6:
      return "sexta - feira";
    case 7:
      return "sabado";
  }
};

console.log(diaSemana(7));
