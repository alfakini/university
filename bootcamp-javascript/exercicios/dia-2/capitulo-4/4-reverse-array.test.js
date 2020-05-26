// Os arrays possuem o método reverse, que modifica o array invertendo a ordem que os elementos aparecem.
// Para esse exercício, escreva a função: reverseArray que recebe um array como argumento
// e produz um novo array que tem os mesmos elementos com ordem inversa.
//
// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];

function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

// TESTES

describe("reverseArary", function () {
  it("receve um array e retorna o seu inverso", function () {
    expect(reverseArray(["A", "B", "C"])).toEqual(["C", "B", "A"]);
  });
});
