// Substitua RESPOSTA pela resposta correta abaixo
// Substitua IMPLEMENTE pela implementação

describe('Arrays', function() {
  describe('pop e push', function() {
    let sequence = [1, 2, 3]

    it('qual é o estado do array após a aplicação de cada método pop ou push?', function() {
      expect(sequence).toEqual(RESPOSTA)
      sequence.push(4)
      expect(sequence).toEqual(RESPOSTA)
      sequence.push(5)
      expect(sequence).toEqual(RESPOSTA)
      expect(sequence.pop()).toEqual(RESPOSTA)
      expect(sequence).toEqual(RESPOSTA)
    })

  })

  describe('pegar o valor de um array', function() {
    let listOfNumbers = [2, 3, 5, 7, 11]

    it('qual é o valor nas posições abaixo?', function () {
      expect(listOfNumbers[2]).toEqual(RESPOSTA)
      expect(listOfNumbers[3]).toEqual(RESPOSTA)
      expect(listOfNumbers[4]).toEqual(RESPOSTA)
      expect(listOfNumbers[2 - 1]).toEqual(RESPOSTA)
    })
  })

  describe('slice', function() {
    let entries = [0, 1, 2, 3, 4]

    it('retorna parte do array', function() {
      expect(entries.slice(2, 4)).toEqual(RESPOSTA)
      expect(entries.slice(3, 4)).toEqual(RESPOSTA)
      expect(entries.slice(1, 1)).toEqual(RESPOSTA)
      expect(entries.slice(2)).toEqual(RESPOSTA)
    })
  })

  describe('indexOf', function() {
    let entries = [1, 2, 3, 2, 1]

    it('retorna of indice de um valor no array', function() {
      expect(entries.indexOf(2)).toEqual(RESPOSTA)
      expect(entries.indexOf(3)).toEqual(RESPOSTA)
    })
  })

  describe('lastIndexOf', function() {
    let entries = [1, 2, 3, 2, 1]

    it('retorna of indice de um valor no array', function() {
      expect(entries.lastIndexOf(2)).toEqual(RESPOSTA)
      expect(entries.lastIndexOf(3)).toEqual(RESPOSTA)
    })
  })

  describe("array loop usando 'for...of'", function() {
    // Caso não lembre o que é um for of, consulte o material da aula ou procure
    // no Google por 'javascript for...of'

    let JOURNAL = [2, 3, 5, 7, 11]

    const forVelho = (valores) => {
      let entries = []

      for (let i = 0; i < valores.length; i++) {
        entries.push(valores[i] * valores[i])
      }

      return entries
    }

    const forNovo = (valores) => {
      let entries = []

      // IMPLEMENTE

      return entries
    }

    it("re-escreva o for da função forVelho usando 'for...of' na função forNovo", function () {
      expect(forNovo(JOURNAL)).toEqual(forVelho(JOURNAL))
    })
  })
})
