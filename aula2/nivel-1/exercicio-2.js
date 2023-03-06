const prompt = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
    
prompt.question("Digite o valor de uma de uma arestas do quadrado: ", aresta => {
    let perímetroDoQuadrado = aresta * 4
    console.log(`seu valor foi ${perímetroDoQuadrado}`)
    prompt.close()
})