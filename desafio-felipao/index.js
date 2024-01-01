let heroi = "Avatar";
experienciaDoHeroi = 7010;
nivel = "";

// Determina o nível com base na experiência

if (experienciaDoHeroi < 1000) {
  nivel = "Ferro";
} else if (experienciaDoHeroi <= 2000) {
  nivel = "Bronze";
} else if (experienciaDoHeroi <= 5000) {
  nivel = "Prata";
} else if (experienciaDoHeroi <= 7000) {
  nivel = "Ouro";
} else if (experienciaDoHeroi <= 8000) {
  nivel = "Platina";
} else if (experienciaDoHeroi <= 9000) {
  nivel = "Ascendente";
} else if (experienciaDoHeroi <= 10000) {
  nivel = "Imortal";
} else if (experienciaDoHeroi >= 10001) {
  nivel = "Radiante";
} else {
  nivel = 0;
}

console.log("O Herói de nome " + heroi + " está no nível de " + nivel + ".");
