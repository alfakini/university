// O capítulo anterior introduziu a função Math.min que retorna o seu menor argumento.
// Nós podemos reproduzir essa funcionalidade agora.Escreva uma função min que recebe
// dois argumentos e retorna o menor deles.
//
// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10

function min(a, b) {
  // IMPLEMENTE
}

// TESTES

describe("Mínimo", function () {
  it("Ao receber 0 e 10 como parâmetros, retorna 0", function () {
    expect(min(0, 10)).toEqual(0);
  });

  it("Ao receber 0 e -10 como parâmetros, retorna -10", function () {
    expect(min(0, -10)).toEqual(-10);
  });
})
