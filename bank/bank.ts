type Correntista = {
    nome: string, 
    celular: string,
    telefoneFixo: string | null,
    conta: ContaBancaria
}

type ContaBancaria = {
    numero: number,
    depositar: (valor: number) => number
}

type Transacao = {
    pagador: Correntista,
    recebedor: Correntista,
    dados: ContaBancaria 
}


// -------------------------------------

let contaCorrente: ContaBancaria = {
    numero: 369,
    depositar(valor: number): number {
        return valor
    }
}

let correntista: Correntista = {
     nome : 'Cleyton Chagas',
     celular : '11 900000',
     telefoneFixo : null,
     conta: contaCorrente
}

let transacao: Transacao = {
    pagador: correntista,
    recebedor: correntista,
    dados: contaCorrente
}


console.log(transacao.dados.depositar(400))
console.log(transacao.pagador)



