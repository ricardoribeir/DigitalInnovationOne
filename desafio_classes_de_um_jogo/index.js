class Heroi {
  constructor(nome, idade, tipoPoder, forca) {
    this.nome = nome;
    this.idade = idade;
    this.tipoPoder = tipoPoder;
    this.forca = forca;
  }

  atacar() {
    let ataque = "";
    switch (this.tipoPoder) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marcias";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque descohecido";
    }
    const mensagem = `O ${this.tipoPoder} ${this.nome} atacou usando ${ataque} com força de ${this.forca}`;
    console.log(mensagem);
  }
}

const heroi1 = new Heroi("Genkai", 123, "ninja", 1200);

console.log(heroi1);
heroi1.atacar();
