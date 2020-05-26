// Escreva um programa que cria uma string que representa uma grade 8x8,
// usando novas linhas para separar os caracteres.A cada posição da grade existe
// ou um espaço ou um caracter "#", de forma que estes caracteres formem um tabuleiro de xadrez.
//
// Passando esta string para console.log, ela deverá se parecer com isso:
//
// #_#_#_#
// _#_#_#_#
// #_#_#_#
// _#_#_#_#
// #_#_#_#
// _#_#_#_#
// #_#_#_#
// _#_#_#_#
//
// Quando isso funcionar, defina uma variável tamanho = 8, e mude o programa para que o mesmo
// funciona para qualquer tamanho, retornando uma grade com a largura e altura fornecida.

function imprimirXadrez(size) {
  var board = "";

  // IMPLEMENTE

  console.log(board);
}

// TESTES

describe("Tabuleiro de Xadrez", function () {
  let outputData = "";

  beforeEach(() => {
    outputData = "";
  });

  const storeLog = inputs => (outputData += inputs + "\n");
  console["log"] = jest.fn(storeLog);

  it("imprime Tabuleiro de Xadrez de 8x8", function () {
    imprimirXadrez(8)
    expect(outputData).toEqual("_#_#_#_#\n#_#_#_#_\n_#_#_#_#\n#_#_#_#_\n_#_#_#_#\n#_#_#_#_\n_#_#_#_#\n#_#_#_#_\n\n")
  });

  it("imprime Tabuleiro de Xadrez de 1x1", function () {
    imprimirXadrez(1)
    expect(outputData).toEqual("_\n\n")
  });

  it("imprime Tabuleiro de Xadrez de 2x2", function () {
    imprimirXadrez(2)
    expect(outputData).toEqual("_#\n#_\n\n")
  });

  it("imprime Tabuleiro de Xadrez de 3x3", function () {
    imprimirXadrez(3)
    expect(outputData).toEqual("_#_\n#_#\n_#_\n\n")
  });

  it("imprime Tabuleiro de Xadrez de 4x4", function () {
    imprimirXadrez(4)
    expect(outputData).toEqual("_#_#\n#_#_\n_#_#\n#_#_\n\n")
  });

  it("imprime Tabuleiro de Xadrez de 5x5", function () {
    imprimirXadrez(5)
    expect(outputData).toEqual("_#_#_\n#_#_#\n_#_#_\n#_#_#\n_#_#_\n\n")
  });

  it("imprime Tabuleiro de Xadrez de 6x6", function () {
    imprimirXadrez(6)
    expect(outputData).toEqual("_#_#_#\n#_#_#_\n_#_#_#\n#_#_#_\n_#_#_#\n#_#_#_\n\n")
  });

  it("imprime Tabuleiro de Xadrez de 7x7", function () {
    imprimirXadrez(7)
    expect(outputData).toEqual("_#_#_#_\n#_#_#_#\n_#_#_#_\n#_#_#_#\n_#_#_#_\n#_#_#_#\n_#_#_#_\n\n")
  });

  it("imprime Tabuleiro de Xadrez de 9x9", function () {
    imprimirXadrez(9)
    expect(outputData).toEqual("_#_#_#_#_\n#_#_#_#_#\n_#_#_#_#_\n#_#_#_#_#\n_#_#_#_#_\n#_#_#_#_#\n_#_#_#_#_\n#_#_#_#_#\n_#_#_#_#_\n\n")
  });

  it("imprime Tabuleiro de Xadrez de 10x10", function () {
    imprimirXadrez(10)
    expect(outputData).toEqual("_#_#_#_#_#\n#_#_#_#_#_\n_#_#_#_#_#\n#_#_#_#_#_\n_#_#_#_#_#\n#_#_#_#_#_\n_#_#_#_#_#\n#_#_#_#_#_\n_#_#_#_#_#\n#_#_#_#_#_\n\n")
  });
});
