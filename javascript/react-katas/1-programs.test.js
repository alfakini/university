// Substitua RESPOSTA pela resposta correta abaixo

describe('Programas JavaScript', function() {
  describe('qual será o valor do código abaixo?', function() {
    it('qual será o valor no escopo?', function() {

      let valor = null
      let x = 10
      if (true) {
        let y = 20
        var z = 30
        valor = x + y + z
      }
      valor = x + z

      const RESPOSTA = // RESPOSTA
      expect(valor).toBe(RESPOSTA)
    })

    it('qual será o valor do retorno da função?', function() {

      const halve = function(n) {
        return n / 2
      }

      let n = 10

      const RESPOSTA = // RESPOSTA
      expect(halve(100)).toEqual(RESPOSTA)
    })
  })
})
