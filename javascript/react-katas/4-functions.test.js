// Substitua IMPLEMENTE pelo código necessário para fazer os testes passarem

describe('Funções', function() {
  describe('função que retorna true se a soma de 2 parâmetros forem igual a 2', function() {
    function somaIgualDois(a, b) {
      // IMPLEMENTE
    }

    it('retorna true para 1 + 1', function() {
      expect(somaIgualDois(1, 1)).toBeTruthy()
    })

    it('retorna true para 2 + 0', function() {
      expect(somaIgualDois(2, 0)).toBeTruthy()
    })

    it('retorna true para 0 + 2', function() {
      expect(somaIgualDois(0, 2)).toBeTruthy()
    })

    it('retorna false para 1 + 2', function() {
      expect(somaIgualDois(1, 2)).toBeFalsy()
    })

    it('retorna false para 3 + 1', function() {
      expect(somaIgualDois(3, 1)).toBeFalsy()
    })

    it('retorna false para 1 + 0', function() {
      expect(somaIgualDois(1, 0)).toBeFalsy()
    })
  })

  describe('função que retorna Small se o número for menor que 10, Medium se for menor que 100 e Large se for maior', function() {
    function tamanhoDoNumero(a) {
      // IMPLEMENTE
    }

    it('retorna Small para 1', function() {
      expect(tamanhoDoNumero(1)).toEqual('Small')
    })

    it('retorna Small para 9', function() {
      expect(tamanhoDoNumero(9)).toEqual('Small')
    })

    it('retorna Small para 5', function() {
      expect(tamanhoDoNumero(5)).toEqual('Small')
    })

    it('retorna Medium para 10', function() {
      expect(tamanhoDoNumero(10)).toEqual('Medium')
    })

    it('retorna Medium para 55', function() {
      expect(tamanhoDoNumero(55)).toEqual('Medium')
    })

    it('retorna Medium para 99', function() {
      expect(tamanhoDoNumero(99)).toEqual('Medium')
    })

    it('retorna Large para 100', function() {
      expect(tamanhoDoNumero(100)).toEqual('Large')
    })

    it('retorna Large para 1000', function() {
      expect(tamanhoDoNumero(1000)).toEqual('Large')
    })
  })

  describe("função que retorna 1 para 'a', 2 para 'b', 3 para 'c' usando switch cases", function() {
    function retornaUsandoSwitch(valor) {
      switch (valor) {
        // IMPLEMENTE
      }
    }

    it("retorna 1 para 'a'", function() {
      expect(retornaUsandoSwitch('a')).toEqual(1)
    })

    it("retorna 2 para 'b'", function() {
      expect(retornaUsandoSwitch('b')).toEqual(2)
    })

    it("retorna 3 para 'c'", function() {
      expect(retornaUsandoSwitch('c')).toEqual(3)
    })

    it("retorna 'padrão' para qualquer outro valor", function() {
      expect(retornaUsandoSwitch(Math.random().toString(36).substring(7))).toEqual('padrão')
    })
  })

  describe("re-escreva a função funcao abaixo usando arrow function", function() {
    function funcao(valor) {
      returna valor ** 2
    }

    // IMPLEMENTE novaFuncao usando arrow function.
    // Caso existe dúvida sobre o que é uma arrow function procure
    // no Google ou no material apresentado em sala de aula

    const novaFuncao = // IMPLEMENTE

    it('retorna 1 para o parametro 1', function() {
      expect(novaFuncao(1)).toEqual(1)
    })

    it('retorna 4 para o parametro 2', function() {
      expect(novaFuncao(2)).toEqual(4)
    })

    it('retorna 25 para o parametro 5', function() {
      expect(novaFuncao(5)).toEqual(25)
    })
  })

  describe("re-escreva a função abaixo usando arrow function em apenas uma linha", function() {
    const power = (base, exponent) => {
      let result = 1;
      for (let count = 0; count < exponent; count++) {
        result *= base;
      }
      return result;
    };

    const novaPower = // IMPLEMENTE ................................................. //

    it('retorna o mesmo valor de power', function() {
      expect(novaPower(1, 2)).toEqual(power(1, 2))
      expect(novaPower(2, 2)).toEqual(power(2, 2))
      expect(novaPower(3, 2)).toEqual(power(3, 2))
      expect(novaPower(2, 3)).toEqual(power(2, 3))
      expect(novaPower(2, 4)).toEqual(power(2, 4))
      expect(novaPower(5, 2)).toEqual(power(5, 2))
    })
  })

  describe("re-escreva a função abaixo usando arrow function sem precisar chamar return", function() {
    const square = (x) => { return x * x; };

    const novaSquare = // IMPLEMENTE ................................................. //

    it('retorna o mesmo valor de square', function() {
      expect(novaSquare(1)).toEqual(square(1))
      expect(novaSquare(2)).toEqual(square(2))
      expect(novaSquare(3)).toEqual(square(3))
      expect(novaSquare(4)).toEqual(square(4))
      expect(novaSquare(5)).toEqual(square(5))
      expect(novaSquare(6)).toEqual(square(6))
    })
  })

  describe('rest parameters', function() {
    // não sabe o que são rest parameters? Pesquise no Google ou leia o material
    // apresentado em sala

    // substitua o IMPLEMENTE abaixo pelo rest parameters

    function max(IMPLEMENTE) {
      let result = -Infinity;
      for (let number of numbers) {
        if (number > result) result = number;
      }
      return result;
    }

    it('retorna o valor máximo dos parametros passados', function() {
      expect(max(4, 1, 9, -2)).toEqual(9)
      expect(max(4, 1)).toEqual(4)
      expect(max(4, 1, 2, 3, 4, 5, 6)).toEqual(6)
    })

    it('recebe arrays como parâmetros usando rest parameters', function() {
      let entries = [4, 1, 9, -2]
      const RESPOSTA = // IMPLEMENTE passando o array entries para a função max usando rest parameters
      expect(RESPOSTA).toEqual(9)
    })
  })
})
