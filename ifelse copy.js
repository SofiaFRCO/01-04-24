/**
 * O algoritimo ifelse serve para validação de dados, por exemplo:
 * if (variavel == variavel2) {algo irá acontecer se a variavel1 for igual a variavel2} else { algo irá acontecer se a variavel1 for diferente da variavel2}
 * 
 * if: nome do algoritmo
 * parêntese(): local onde se declaram os parâmetros ou expressões a ser validada
 * chaves{}: bloco de códigos a serem executados, ou seja, tudo que estiver dentro do bloco de códigos será executado 
 * else: "senão" é onde serão executados os códigos, que estiverem dentro do bloco {}, caso a validação do algoritmo "if" retorne falsa  
 * 
 * 
 * operadores lógicos :
 * 
 * == serve para comparar se uma variável/valor é igual a outra
 * != serve para comparar se uma variável/valor é diferente da outra
 * > serve para comparar se uma variável/valor é maior que a outra
 * < serve para comparar se uma variável/valor é menor que a outra
 * >= serve para comparar se uma variável/valor é maior ou  igual a outra
 * <= serve para comparar se uma variável/valor é menor ou  igual a outra
 * 
 * se "falso": adicionar o ponto de exclamação no início de declaração de parâmetros/expressão, por exemplo:
 * if (!variavel1 == variavel2) {bloco de código} aqui significa que:se a comparação da variavel1 com a variavel2 retornar falso, os códigos que estiverem dentro do bloco de código serão executados, não havendo a necessidade do uso da clausula "else"
 * 
 * criar um validador onde você irá declarar duas variáveis, cada uma com um valor DIFERENTE da outra, então haverá uma resposta diferente para cada situação
 * 
 * vamos criar dois inputs, onde cada input irá para cada uma das duas variáveis, ou seja:
 * <input type="text" id="txtVar1"/>
 * <input type="text" id="txtVar2"/>
 * 
 * var txtVar1 = document.getElementById("txtVar1");
 * var txtVar2 = document.getElementById("txtVar2");
 * 
 * txtVar1.value que tem que ser comparado com o txtVar2.value
 * 
 * enviar os dados via console.log()
 */

let var1 = "maça";
let var2 = "banana";

if (var1 !== var2) {
  console.log("As variáveis são diferentes.");
} else {
  console.log("As variáveis são iguais.");
}
