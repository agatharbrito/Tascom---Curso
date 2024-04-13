//Valor impresso no console: Usuario autenticado

username = "agatharbrito";
password = "123456";

if (username == "agatharbrito" && password == "123456") {
  console.log("Usuario autenticado");
} else {
  console.log("Login e/ou senha incorretos");
}

//Redirecionar o usuario para site conforme a idade do mesmo
var idade = 16;
if (idade >= 18) {
  window.location.href = "homerprincipal.html";
} else if (idade < 18 && idade >= 15) {
  window.location.href = "homejovem.html";
} else {
  window.location.href = "homeinfantil.html";
}
