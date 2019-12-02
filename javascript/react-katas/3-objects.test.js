// Substitua RESPOSTA pela resposta correta abaixo

describe('Objects', function () {
  describe('pop e push', function() {
    let day1 = {
      squirrel: false,
      events: ["work", "touched tree", "pizza", "running"]
    }

    it('qual é o valor das chaves do objeto?', function() {
      expect(day1.squirrel).toEqual(RESPOSTA)
      expect(day1.wolf).toEqual(RESPOSTA)

      day1.wolf = false

      expect(day1.wolf).toEqual(RESPOSTA)
      expect(day1.events).toEqual(RESPOSTA)
    })
  })

  describe('delete', function() {
    let anObject = { left: 1, right: 2 }

    it('qual é o valor das chaves do objeto?', function() {
      expect(anObject.left).toEqual(RESPOSTA)
      expect(anObject['left']).toEqual(RESPOSTA)
      expect('left' in anObject).toEqual(RESPOSTA)

      delete anObject.left

      expect(anObject.left).toEqual(RESPOSTA)
      expect(anObject.right).toEqual(RESPOSTA)
      expect(anObject['right']).toEqual(RESPOSTA)
      expect('left' in anObject).toEqual(RESPOSTA)
      expect('right' in anObject).toEqual(RESPOSTA)
    })
  })

  describe('chaves do objeto', function() {
    let anObject = { x: 0, y: 0, z: 2 }

    const retornaChaves = (objeto) => {
      return // IMPLEMENTE
    }
    it('retorna um array contendo as chaves', function() {
      expect(retornaChaves(anObject)).toEqual(['x', 'y', 'z'])
    })
  })

  describe('merge de dois objetos', function() {
    let objectA = { a: 1, b: 2 };
    let objectB = { b: 3, c: 4 };

    const retornaMerge = (a, b) => {
      return // IMPLEMENTE em uma linha
    }

    it('retorna um novo objeto contendo as chaves e valores dos dois mergeados', function() {
      expect(retornaMerge(objectA, objectB)).toEqual({ a: 1, b: 3, c: 4 })
      expect(retornaMerge(objectB, objectA)).toEqual({ a: 1, b: 3, c: 4 })
    })
  })

  describe('JSON', function() {
    // Não lembra o que é JSON? Leia o material usando em sala ou procure no Google

    describe('usando a função JSON.stringify', function() {
      it('retorna o valor do JSON em string', function () {
        let string = JSON.stringify({ squirrel: false, events: ["weekend"] })

        expect(string).toEqual(RESPOSTA)
        expect(JSON.parse(string).events).toEqual(RESPOSTA)
      })
    })
  })
})
