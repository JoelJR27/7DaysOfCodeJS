// /*
//     Desafio: Criar destinos possíveis de um jogo em que o usuário escolha.
//     1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

//     2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue.
//     Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

//     3. Depois, independente das escolhas anteriores,
//     o usuário poderá escolher entre seguir se especializando na área escolhida ou
//     seguir se desenvolvendo para se tornar Fullstack.
//     Você deve exibir na tela uma mensagem específica para cada escolha.

//     4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de
//     se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez.
//     Então, enquanto ela continuar respondendo ok para a pergunta:
//     “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt,
//     para que ela complete o nome da tecnologia em questão.
//     E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
// */

const areaEscolhida = prompt(
  "Em qual area gostaria de se especializar? Front-End ou Back-End?"
).toLowerCase();

if (areaEscolhida == "front-end") {
  const framework = prompt(
    "Quais tecnologias gostaria de aprender? React ou Vue?"
  );
  prompt(
    `Você quer se especializar em ${framework} ou seguir se desenvolvendo para se tornar Fullstack?`
  );
} else if (areaEscolhida == "back-end") {
  const linguagem = prompt(
    "Quais tecnologias gostaria de aprender? C# ou Java?"
  );
  prompt(
    `Você quer se especializar em ${linguagem} ou seguir se desenvolvendo para se tornar Fullstack?`
  );
}

let msg = prompt(
  'Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite "ok" para continuar.'
);
while (msg == "ok") {
  let linguagem = prompt("Quais tecnologias gostaria de aprender?");
  alert(
    `Você quer se especializar em ${linguagem}. É uma linguagem muito interessante!`
  );
  msg = prompt(
    'Tem mais alguma tecnologia que vou gostaria de aprender? Se sim, digite "ok" para continuar.'
  );
}
