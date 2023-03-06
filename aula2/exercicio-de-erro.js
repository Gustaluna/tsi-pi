// O programa abaixo deveria computar a média de 4 números,
//corrija todos os seus erros e comente cada uma das alterações feitas no código:

//  a = 10 
//  b = 16 
//  c = 14  {Todas as variaveis nao foram declaradas com as palavras reservadas esperadas (let, const ou var)}
//  d = 12 
//  e = 18 

 let a = 10
 let b = 16 
 let c = 14
 let d = 12
 let e = 18
 
//media = a + b + c + d + e / 5 => a palavra media nao esta declarada com uma palavra
                                     //reservada para uma variavel ou uma constante
                                     //(let, var, const). Alem disso, a operacao nao esta 
                                     //obedecendo a ordem de precendencia, dessa forma, sem o 
                                     //uso dos parenteses a operacao trara o valor falso para
                                     // a operacao dividindo o valor da variavel e por cinco primeiro
let media = (a + b + c + d + e) / 5 
// console.log("media") => O que esta indicado para o console.log esta em aspas "tipando"
                        // o que deveria ser a variavel em uma string, dessa forma,
                        // o resultado imprimido seria a palavra "media" e nao o valor dar
                        // variavel desejada
console.log(media) 