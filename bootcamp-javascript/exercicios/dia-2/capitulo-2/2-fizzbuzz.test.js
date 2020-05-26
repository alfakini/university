// Escreva um programa que imprima (usando console.log()) todos os números de 1 a 100, exceto que,
// para números divisíveis por 3, ele imprima Fizz ao invés do número, e para números divisíveis
// por 5 (e não 3), ele imprima Buzz.
//
// Quando você tiver o programa funcionando, modifique - o para imprimir FizzBuzz para números
// que são divisíveis por ambos os números 3 e 5.
//
// (Isto é na verdade uma pergunta de entrevista usada para eliminar uma porcentagem significativa de
// candidatos programadores.Então, se você resolvê - la, você está autorizado de se sentir bem consigo mesmo).

function imprimirFizzBuzz() {
  // IMPLEMENTE
}

// TESTES

describe("FizzBuzz", function () {
  let outputData = "";
  const storeLog = inputs => (outputData += inputs + "\n");
  console["log"] = jest.fn(storeLog);

  it("imprime o Fizz Buzz", function () {
    imprimirFizzBuzz()
    expect(outputData).toEqual("1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz\n31\n32\nFizz\n34\nBuzz\nFizz\n37\n38\nFizz\nBuzz\n41\nFizz\n43\n44\nFizzBuzz\n46\n47\nFizz\n49\nBuzz\nFizz\n52\n53\nFizz\nBuzz\n56\nFizz\n58\n59\nFizzBuzz\n61\n62\nFizz\n64\nBuzz\nFizz\n67\n68\nFizz\nBuzz\n71\nFizz\n73\n74\nFizzBuzz\n76\n77\nFizz\n79\nBuzz\nFizz\n82\n83\nFizz\nBuzz\n86\nFizz\n88\n89\nFizzBuzz\n91\n92\nFizz\n94\nBuzz\nFizz\n97\n98\nFizz\nBuzz\n")
  });
})
