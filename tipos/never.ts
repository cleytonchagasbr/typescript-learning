// funcoes que nao tem retorno finito

function falhou(message: string): never {
    throw new Error(message)
}

const compra = {
    id: 9,
    preco: 11,
    validarComprar() {
        if(this.id <= 0) {
            falhou('id inconsistente')
        }
        if(this.preco <= 0) {
            falhou('preço inconsistente')
        }
    }
}