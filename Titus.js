class Titus {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    
    if (this.tipo.toLowerCase() === 'mago') {
      ataque = 'magia';
    } else if (this.tipo.toLowerCase() === 'guerreiro') {
      ataque = 'espada';
    } else if (this.tipo.toLowerCase() === 'monge') {
      ataque = 'artes marciais';
    } else if (this.tipo.toLowerCase() === 'ninja') {
      ataque = 'shuriken';
    } else {
      ataque = 'ataque desconhecido';
    }

    console.log(`o ${this.tipo.toLowerCase()} atacou usando ${ataque}`);
  }
}

const titus1 = new Titus('Gandalf', 100, 'Mago');
titus1.atacar();  

const titus2 = new Titus('Conan', 30, 'Guerreiro');
titus2.atacar();

const titus3 = new Titus('Bruce', 45, 'Monge');
titus3.atacar();

const titus4 = new Titus('Ryu', 28, 'Ninja');
titus4.atacar();
