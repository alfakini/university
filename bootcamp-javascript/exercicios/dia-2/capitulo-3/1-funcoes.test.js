describe("Funções", function () {
  it("Implemente uma função chamada add que recebe dois parâmtros e retorna a soma deles", function () {

    // IMPLEMENTE

    expect(add(1, 2)).toEqual(3);
  });

  describe("Escopo", function () {
    it("Qual será o valor no escopo?", function () {

      var valor = null
      var x = 10
      if (true) {
        var y = 20
        var z = 30
        valor = x + y + z
      }
      valor = x + z

      var RESPOSTA = // RESPOSTA
      expect(valor).toEqual(RESPOSTA)
    })

    it("Qual será o valor do retorno da função?", function () {

      var halve = function (n) {
        return n / 2
      }

      var n = 10

      var RESPOSTA = // RESPOSTA
      expect(halve(100)).toEqual(RESPOSTA)
    })
  })
})
