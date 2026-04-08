class Automovel{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(){
        return `${this.marca}, ${this.modelo}, ${this.ano}`
    }
}

class Carro extends Automovel{
    constructor(marca, modelo, ano, portais){
        super(marca, modelo, ano);
        this.portas = this.portas;
    }
}

class Moto extends Automovel{
    constructor(marca, modelo, ano, cilindrada){
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
    }
    exibirDetalhes(){
        return `${super.exibirDetalhes()}, cilindrada: ${this.cilindrada}`
    }
}
    let moto1 = new Moto("Honda", "CBX 250 - Twister", 2007, 249);
    console.log(moto1.exibirDetalhes());
    let carro1 = new Carro("Peugeot", "207 Sport 1.4", 2011, 5);
    console.log(carro1.exibirDetalhes());
    
