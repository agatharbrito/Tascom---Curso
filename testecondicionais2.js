//Classificando o lutador para sua categoria de peso

const Lutador = 68;

const pesoPalha = "pesoPalha";
const pesoMosca = "pesoMosca";
const pesoGalo = "pesoGalo";
const pesoPena = "pesoPena";
const pesoLeve = "pesoLeve";
const pesoMeioMedio = "pesoMeioMedio";
const pesoMedio = "pesoMedio";
const pesoMeioPesado = "pesoMeioPesado";
const pesoPesado = "pesoPesado";

if (Lutador <= 52) {
  console.log(`O lutador se classifica em: ${pesoPalha}`);
} else if (Lutador <= 56) {
  console.log(`O lutador se classifica em: ${pesoMosca}`);
} else if (Lutador <= 61) {
  console.log(`O lutador se classifica em: ${pesoGalo}`);
} else if (Lutador <= 65) {
  console.log(`O lutador se classifica em: ${pesoPena}`);
} else if (Lutador <= 70) {
  console.log(`O lutador se classifica em: ${pesoLeve}`);
} else if (Lutador <= 77) {
  console.log(`O lutador se classifica em: ${pesoMedio}`);
} else if (Lutador <= 83) {
  console.log(`O lutador se classifica em: ${pesoMedio}`);
} else if (Lutador <= 92) {
  console.log(`O lutador se classifica em: ${pesoMeioPesado}`);
} else if (Lutador <= 120) {
  console.log(`O lutador se classifica em: ${pesoPesado}`);
}
