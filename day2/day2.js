/*
    Desafio 2:
    Criar um algoritmo que obtenha o nome, idade e linguagem de programação estudada pelo usuário.
    À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.
    No final, o sistema vai exibir a mensagem:
    
    "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
*/

//  Armazenando as informções obtidas.
let name = prompt("Qual o seu nome?");
let age = prompt("Qual a sua idade?");
let language = prompt("Qual linguagem de programação você estuda?");

//  Validando se as informações foram preenchidas.
while (name == "" || age == "" || language == "") {
  alert("Por favor, preencha todos os campos.");
  name = prompt("Qual o seu nome?");
  age = prompt("Qual a sua idade?");
  language = prompt("Qual linguagem de programação vocé estuda?");
}

//  Exibindo ao usuário as informações obtidas.
alert(`Olá ${name}, você tem ${age} anos e estuda ${language}!`);

/*  
    Exercício Opcional:
    Complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

    Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

    E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
    
    1 > Muito bom! Continue estudando e você terá muito sucesso.
    2 > Ahh que pena... Já tentou aprender outras linguagens?
*/

const likeTheLanguage = prompt(
  `Você gosta de estudar ${language}? Responda com o número 1 para SIM e 2 para NÃO.`
);

if (likeTheLanguage == 1) {
  alert(`Muito bom! Continue estudando e você terá muito sucesso.`);
} else if (likeTheLanguage == 2) {
  alert(`Ahh que pena... Já tentou aprender outras linguagens?`);
}
