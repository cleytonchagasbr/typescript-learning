let fistName: string = 'Cleyton'

function getFistName(): string {
    return fistName;
}

console.log(getFistName())

function sendVoid(): void {
    return console.log('void')
}

function soma(number1: number, number2: number) {
    return number1 + number2;
}


let multiplicar: (num1: number, num2: number) => number
