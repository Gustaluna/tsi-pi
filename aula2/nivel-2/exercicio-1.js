// Imprimir média de seis números;
function perguntaNumero(){
const prompt = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
    prompt.question("Digite o valor de um numero: ", numero => {
        console.log(`O numero digitado foi ${numero}`)
        prompt.close()        
})
}
    for(i = 0; i <= 6; i++){
        perguntaNumero()
}

// let numero1 = 5
// let numero2 = 5
// let numero3 = 5
// let numero4 = 5
// let numero5 = 5
// let numero6 = 5
// let somaDeNumeros = numero1 + numero2 + numero3 + numero4 + numero5 + numero6

// let media = (somaDeNumeros) / 6

// console.log(media)