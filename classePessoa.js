class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    saudar(){
        console.log('Olá! Meu nomem é ${this.nome}!')
    }
    afazerAniversario(){
        this.idade += 1;
        console.log('Fleiz aniversário, agora o ${this.nome} tem ${this.idade}.')
    }
}

let pessoal= new Pessoa ("Xandão", 32, "Professor");
pessoal.saudar();
pessoal.fazerAniversario()
