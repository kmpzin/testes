function pertenceFibonacci(num) {
  let a = 0;
  let b = 1;

  while (a <= num) {
    if (a === num) {
      return true;
    }
    let temp = a;
    a = b;
    b = temp + b;
  }

  return false;
}

// Obtendo o número do usuário
const numero = 25;

// Chamando a função e exibindo o resultado
if (pertenceFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
