function contarAs(string) {
  const regex = /a/gi;
  const matches = string.match(regex);
  return matches ? matches.length : 0;
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "a") {
      contador++;
    }
  }
  return contador;
}

// Exemplo de uso:
const minhaString = "Banana amarela";
const quantidadeDeAs = contarAs(minhaString);
console.log(`A letra 'a' aparece ${quantidadeDeAs} vezes em "${minhaString}".`);
