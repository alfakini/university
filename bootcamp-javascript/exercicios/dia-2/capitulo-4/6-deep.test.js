// DESCRIÇÃO: http://braziljs.github.io/eloquente-javascript/chapters/estrutura-de-dados/#deep-comparison

function deepEqual(a, b) {
  // IMPLEMENTE
}

// TESTES

describe("deepEqual", function () {
  var obj = {here: {is: "an"}, object: 2};

  it("recebe dois objetos iguais e retorna true", function () {
    expect(deepEqual(obj, obj));
  });

  it("recebe dois objetos diferentes e retorna false", function () {
    expect(deepEqual(obj, {here: 1, object: 2}));
  });

  it("recebe dois objetos iguais, porém em espaço de memória diferentes, e retorna true", function () {
    expect(deepEqual(obj, {here: {is: "an"}, object: 2}));
  });
});
