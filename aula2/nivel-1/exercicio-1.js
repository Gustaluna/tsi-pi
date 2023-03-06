// Imprimir o perímetro de um triângulo equilátero (3 vezes aresta);

const prompt = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
    
prompt.question("Digite o valor de uma das arestas do tringulo retangulo: ", aresta => {
    let perimetroDoTriangulo = aresta * 3
    console.log(`seu valor foi ${perimetroDoTriangulo}`)
    prompt.close()
})

//const prompt = require('prompt-sync')();

//let aresta = prompt ("Digite o valor de uma das arestas do tringulo retangulo: ") 

// let perimetroDoTriangulo = aresta * 3

// console.log(`O perimeitro do triangulo retangulo requisitado é ${perimetroDoTriangulo}`)