// Função para simular o estado das lâmpadas
function criarLampadas() {
  return [false, false, false]; // Inicialmente todas apagadas
}

// Função para simular a ação de ligar/desligar um interruptor
function ligarDesligar(interruptores, indice) {
  interruptores[indice] = !interruptores[indice];
}

// Função principal para resolver o enigma
function descobrirLampadas() {
  const interruptores = [false, false, false]; // Inicializa os interruptores

  // Primeira ida à sala com as lâmpadas
  ligarDesligar(interruptores, 0); // Liga o primeiro interruptor
  // ... (aguardar alguns minutos)
  ligarDesligar(interruptores, 1); // Liga o segundo interruptor

  // Segunda ida à sala com as lâmpadas
  const lampadas = criarLampadas();
  // Verifica o estado das lâmpadas e associa aos interruptores
  if (lampadas[0]) {
    // A primeira lâmpada está ligada, então o primeiro interruptor a ser ligado controla ela
    console.log("O primeiro interruptor controla a primeira lâmpada.");
  } else if (lampadas[1]) {
    // A segunda lâmpada está ligada, então o segundo interruptor a ser ligado controla ela
    console.log("O segundo interruptor controla a segunda lâmpada.");
  } else {
    // Nenhuma das duas primeiras lâmpadas está ligada, então o terceiro interruptor controla a primeira
    console.log("O terceiro interruptor controla a primeira lâmpada.");
  }

  // As outras associações podem ser deduzidas logicamente:
  // - Se a primeira lâmpada está quente, o primeiro interruptor a ser ligado controla ela
  // - Se a segunda lâmpada está quente, o segundo interruptor a ser ligado controla ela
  // - Caso contrário, o terceiro interruptor controla a segunda lâmpada
}

// Chamar a função para resolver o enigma
descobrirLampadas();
