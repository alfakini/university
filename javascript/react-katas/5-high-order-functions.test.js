// Substituia IMPLEMENTE pela função presente na API do
// JavaScript que retorna os valores esperados

describe('Funções da API do JavaScript', function() {
  describe('retorna o valor máximo', function() {
    it('entre 2 números', function() {
      expect(IMPLEMENTE(2, 4)).toEqual(4)
    })

    it('entre 3 números', function() {
      expect(IMPLEMENTE(2, 5, 4)).toEqual(5)
    })
  })

  describe('retorna o valor mínimo', function() {
    it('entre 2 números', function() {
      expect(IMPLEMENTE(2, 4)).toEqual(4)
    })

    it('entre 3 números', function() {
      expect(IMPLEMENTE(2, 1, 4)).toEqual(4)
    })
  })

  describe('filter', function() {
    // IMPLEMENTE usando a função filter

    const LIST_OF_CHARS = [
      {
        nome: 'A',
        vogal: true,
        consoante: false
      },
      {
        nome: 'B',
        vogal: false,
        consoante: true
      },
      {
        nome: 'C',
        vogal: false,
        consoante: true
      },
      {
        nome: 'D',
        vogal: false,
        consoante: true
      },
      {
        nome: 'E',
        vogal: true,
        consoante: false
      },
    ]

    it('retorna somente as vogais', function() {
      const resposta = [
        {
          nome: 'A',
          vogal: true,
          consoante: false
        },
        {
          nome: 'E',
          vogal: true,
          consoante: false
        }
      ]

      expect(IMPLEMENTE).toEqual(resposta)
    })

    it('retorna somente as consoantes', function() {
      const resposta = [
        {
          nome: 'B',
          vogal: false,
          consoante: true
        },
        {
          nome: 'C',
          vogal: false,
          consoante: true
        },
        {
          nome: 'D',
          vogal: false,
          consoante: true
        }
      ]

      expect(IMPLEMENTE).toEqual(resposta)
    })
  })

  describe('map', function() {
    // IMPLEMENTE usando a função map

    const LIST_OF_CHARS = [
      {
        nome: 'A',
        vogal: true,
        consoante: false
      },
      {
        nome: 'B',
        vogal: false,
        consoante: true
      },
      {
        nome: 'C',
        vogal: false,
        consoante: true
      },
      {
        nome: 'D',
        vogal: false,
        consoante: true
      },
      {
        nome: 'E',
        vogal: true,
        consoante: false
      },
    ]

    it('retorna uma lista de letras', function() {
      expect(IMPLEMENTE).toEqual(['A', 'B', 'C', 'D', 'E'])
    })
  })

  describe('reduce', function() {
    // IMPLEMENTE USANDO a função reduce

    const VALORES = [1, 2, 3, 4, 5, 6]

    it('retorna a soma de todos os valores', function() {
      epect(IMPLEMENTE).toEqual(21)
    })
  })

  describe('implementar uma função que deixa um array flat', function() {
    // USANDO as funções map, filter e/ou reduce

    let arrays = [[1, 2, 3], [4, 5], [6]]

    function transformaArrayEmFlat(items) {
      return // IMPLEMENTE
    }

    it('retorna um array flat', function() {
      expect(transformaArrayEmFlat(arrays)).toEqual([1, 2, 3, 4, 5, 6])
    })
  })
})
