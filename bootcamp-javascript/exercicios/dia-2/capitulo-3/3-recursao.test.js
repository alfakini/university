// Nós vimos que o % (operador resto) pode ser usado para testar se um número é par ou ímpar,
// usando % 2 para verificar se ele é divisível por dois.Abaixo, está uma outra maneira de
// definir se um número inteiro positivo é par ou ímpar:
//
// * Zero é par.
// * Um é ímpar.
// * Para todo outro número N, sua paridade é a mesma de N-2.
//
// Defina uma função recursiva isEven que satisfaça as condições descritas acima.
// A função deve aceitar um número como parâmetro e retornar um valor Booleano.
//
// Teste-a com os valores 50 e 75. Observe como ela se comporta com o valor -1.
// Por quê? Você consegue pensar em uma maneira de arrumar isso?

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??

function isEven(n) {
  // IMPLEMENTE
}

// TESTES

describe("Mínimo", function () {
  it("Ao receber 50 como parâmetro, retorna true", function () {
    expect(isEven(50)).toBeTruthy();
  });

  it("Ao receber 75 como parâmetro, retorna false", function () {
    expect(isEven(75)).toBeFalsy();
  });

  it("Ao receber -1 como parâmetro, retorna false", function () {
    expect(isEven(-1)).toBeFalsy();
  });
})
