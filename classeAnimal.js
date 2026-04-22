class Animal{
    fazerSom(){
        console.log("Som generico de animal...")
    }
}

class Cachorro extends animais{
    fazerSom(){
         console.log("AU AU AU 🐶​🐶​🐶​")
    }
}

class Vaca extends animais{
    fazerSom(){
         console.log("MU MU MU 🐮​🐮​🐮​​")
    }
}

class MOTO extends animais{
    fazerSom(){
         console.log("VRUUUUUUUNNNNNNN ​🏍️​​🏍️​​🏍️​​")
    }
}

const meuObjetos = [new Cachorro(), new Vaca(), new MOTO()];

for(let i = 0; i < turma.length; i ++ ){
    turma [1].exibirRelatorio();
}
