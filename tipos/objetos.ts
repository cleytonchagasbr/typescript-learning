 let user: { nome: string, idade: number } = {
    nome: 'cleyton',
    idade:  21
}


let cidade: {latitude: number, longitude: number, nome: string} = {
    latitude: 0,
    longitude: 0,
    nome: 'SP'
}

//---------------------

type Funcionario =  {
    supervisores: string [],
    ponto: (horas: number) => string
} 

let createFuncionario: Funcionario = {
    supervisores: ['Ana', 'Luiz'],
    ponto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Ponto errado'
        }
    }   
}

console.log(createFuncionario.supervisores)
console.log(createFuncionario.ponto(5))
