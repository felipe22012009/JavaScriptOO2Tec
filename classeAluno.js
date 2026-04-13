class aluno{
    constructor(nome, matricula, notas){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }
    caucular_media(){
        let soma = 0;
        for (let i = 0; i < this.notas.lenght; i++){
            soma += this.notas[i];
        }
        return soma / this.notas.lenght;
    }
    aluno1 = nawAluno("Ana", 55050, [8.0, 7.3, 9.0]);
    console.log(aluno1.caucular_media())
}