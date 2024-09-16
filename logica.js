// Função para encontrar o próximo número em uma sequência de números ímpares
function proximoImpar(ultimoNumero) {
  return ultimoNumero + 2;
}

// Função para encontrar o próximo número em uma sequência de potências de 2
function proximaPotenciaDeDois(ultimoNumero) {
  return ultimoNumero * 2;
}

// Função para encontrar o próximo número em uma sequência de quadrados perfeitos
function proximoQuadradoPerfeito(ultimoNumero) {
  const raizQuadrada = Math.sqrt(ultimoNumero);
  return (raizQuadrada + 1) * (raizQuadrada + 1);
}

// Função para encontrar o próximo número em uma sequência de quadrados de números pares
function proximoQuadradoPar(ultimoNumero) {
  const raizQuadrada = Math.sqrt(ultimoNumero);
  return (raizQuadrada + 2) * (raizQuadrada + 2);
}

// Função para encontrar o próximo número na sequência de Fibonacci (implementação simples)
function proximoFibonacci(penultimo, ultimo) {
  return penultimo + ultimo;
}

// Testando as funções
console.log(proximoImpar(7));
console.log(proximaPotenciaDeDois(64));
console.log(proximoQuadradoPerfeito(36));
console.log(proximoQuadradoPar(64));
console.log(proximoFibonacci(5, 8));
