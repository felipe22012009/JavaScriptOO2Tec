class Aluno{
    constructor(nome, matricula, notas){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;

    }

    calcularMedia(){
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++){
            soma += this.notas
        }
        return soma/this.notas.length
    }


    obterStatus(){
        const media = this.calcularMedia()

        if (media >= 7){
            return "Aprovado"
        } else if (media >= 5){
            return "Recuperação"
        } else{
            return "reprovado"
        }


    }
}

let turma = [
    new Aluno(`Luiz`, `CGM5050`, [7.2, 2.5, 1.1]),
    new Aluno(`Ana`,  `CGM5051`, [7.3, 2.5, 6.1]),
    new Aluno(`Renan`, `CGM5052`, [4.4, 3.5, 1.9]),
    new Aluno(`Fernando`, `CGM5053`, [9.6, 3.5, 7.5]),
    new Aluno(`Mathheus`, `CGM5054`, [7.0, 5.5, 3.8]),
    new Aluno(`Kauan`, `CGM5055`, [7.6, 8.5, 5.5]),
]

console.log(turma[1]);

for(let i = 0; i < turma.length; i ++ ){
    turma [1].exibirRelatorio();
}





//let aluno1 = new Aluno("Luiz", 850850, [7.2, 6.5, 3.3])
//console.log(aluno1.calcularMedia());
//console.log(aluno1.obterStatus());

