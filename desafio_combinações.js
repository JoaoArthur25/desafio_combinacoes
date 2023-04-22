let numeros = [-11, 13, -17, 19, -23, 29, -31, 37, 41, 43];
let combinacoesTotais = [];

function encontrarCombinacoes(somaDesejada, indiceAtual, combinacaoAtual) {
  if (somaDesejada === 0) {
    // combinação válida
    combinacoesTotais.push(combinacaoAtual.slice());
    return;
  }

  if (somaDesejada < 0 || indiceAtual >= numeros.length) {
    // fim do array ou a soma ultrapassou o valor 53
    return;
  }

  // incluir o elemento atual na combinação
  combinacaoAtual.push(numeros[indiceAtual]);
  encontrarCombinacoes(somaDesejada - numeros[indiceAtual], indiceAtual + 1, combinacaoAtual);
  
  // não incluir o elemento atual na combinação
  encontrarCombinacoes(somaDesejada, indiceAtual + 1, combinacaoAtual);
}

encontrarCombinacoes(53, 0, []);

console.log(combinacoesTotais.length);
