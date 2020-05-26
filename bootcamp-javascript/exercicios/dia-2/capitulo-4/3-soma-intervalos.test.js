// A introdução desse livro mencionou a seguinte maneira como uma boa alternativa para somar um
// intervalo de números:
//
// console.log(sum(range(1, 10)));
//
// Escreva uma função chamada range que recebe dois argumentos, start(início) e end(fim),
// e retorna um array contendo todos os números a partir do valor start até o valor end (incluindo-o).
//
// Em seguida, escreva a função sum que recebe um array de números como argumento e retorna a soma
// desses números.Execute o programa anterior e veja se o resultado retornado é de fato 55.
//
// Como um exercício bônus, modifique a sua função range para aceitar um terceiro argumento opcional
// que indica o tamanho do "incremento" usado para construir o array.Se nenhum valor
// for atribuído ao tamanho do incremento, o array de elementos será percorrido em incrementos de um,
// correspondendo ao comportamento antigo.A chamada à função range(1, 10, 2) deve
// retornar [1, 3, 5, 7, 9]. Certifique-se que funcione também com valores negativos, fazendo
// com que range(5, 2, -1) produza [5, 4, 3, 2].
//
// console.log(sum(range(1, 10)));
// // → 55
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
//
// Dicas:
//
// A maneira mais fácil de construir um array é primeiramente inicializar uma variável para
// [] (um novo array vazio) e, em seguida, chamar várias vezes o seu método push para adicionar os valores.
// Não se esqueça de retornar o array no final da função.
//
// Devido ao fato de que o limite final é inclusivo, ao invés de usar um simples operador <,
// você deverá usar o operador <= para checar o final do seu loop.
//
// Para verificar se o argumento de incremento foi fornecido, você pode verificar o arguments.length
// ou comparar o valor do argumento com undefined.Caso não tenha sido informado, apenas
// configure o seu valor padrão (1) no topo da função.
//
// Fazer com que range entenda incrementos negativos é provavelmente mais fácil de ser feito
// escrevendo dois loops separados, um para contar valores crescentes e outro para valores decrescentes.
// Isso se dá pelo fato de que, quando estamos contando valores decrescentes, o operador que compara e
// verifica se o loop terminou precisa ser >= ao invés de <=.
//
// Pode ser útil usar um valor de incremento diferente do valor padrão (por exemplo -1) quando o valor final do intervalo
// for menor do que o valor de início.Dessa forma, ao invés de ficar preso em um loop infinito, range(5, 2) retorna algo relevante.

function range(start, end, step = null) {
  if (step ==null) {
    step = start < end ? 1 : -1
  }

  var array = [];

  // IMPLEMENTE

  return array;
}

function sum(array) {
  var total = 0;

  // IMPLEMENTE

  return total;
}

// TESTES

describe("range", function () {
  it("recebe 1 e 10 como parâmetros e retorna [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", function () {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("recebe 5, 2 e -1 como parâmetros e retorna [5, 4, 3, 2]", function () {
    expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
  });
});

describe("range", function () {
  it("recebe um array contendo o range de 1 a 10 como parâmtro e retorna a sua soma 55", function () {
    expect(sum(range(1, 10))).toEqual(55);
  });

  it("recebe um array contendo o range de 5 a 30 como parâmtro e retorna a sua soma 455", function () {
    expect(sum(range(5, 30))).toEqual(455);
  });
});
