// Você pode acessar o N-ésimo caractere, ou letra, de uma string escrevendo
// "string".charAt(N), similar a como você acessa seu tamanho com "s".length.
// O valor retornado será uma string contendo somente um caractere(por exemplo, "b").
// O primeiro caractere está na posição zero, o que faz com que o último seja encontrado
// a posição string.length - 1. Em outras palavras, uma string com dois caracteres possui
// tamanho(length) dois, e suas respectivas posições são 0 e 1.
//
// Escreva uma função countBs que receba uma string como único argumento e retorna o
// número que indica quantos caracteres“ B”, em maiúsculo, estão presentes na string.
//
// Em seguida, escreva uma função chamada countChar que se comporta de forma parecida com
// countBs, exceto que ela recebe um segundo argumento que indica o caractere que
// será contado(ao invés de contar somente o caractere“ B” em maiúsculo).
// Reescreva countBs para fazer essa nova funcionalidade.
//
// console.log(countBs(“BBC”));
// // → 2
// console.log(countChar(“kakkerlak”, “k”));
// // → 4
//
// Dica: Um laço de repetição em sua função fará com que todos os caracteres na string sejam
// verificados se usarmos um índice de zero até uma unidade abaixo que seu tamanho(< string.length).
// Se o caractere na posição atual for o mesmo que a função está procurando, ele incrementará
// uma unidade na variável de contagem(counter).Quando o laço chegar ao seu fim,
// a variável counter deverá ser retornada.
//
// Certifique-se de usar e criar variáveis locais à função, utilizando a palavra-chave var.

function countChar(string, ch) {
  let counted = 0;

  // IMPLEMENTE

  return counted;
}

function countBs(string) {
  // IMPLEMENTE
}

// TESTES

describe("countChar", function () {
  it("Ao receber kakkerlak e k como parâmetros, retorna 4", function () {
    expect(countChar("kakkerlak", "k")).toEqual(4);
  });

  it("Ao receber abcdebb e b como parâmetros, retorna 3", function () {
    expect(countChar("abcdebb", "b")).toEqual(3);
  });
})

describe("countBs", function () {
  it("Ao receber BBC como parâmetro, retorna 2", function () {
    expect(countBs("BBC")).toEqual(2);
  });

  it("Ao receber ABADWBBC como parâmetro, retorna 3", function () {
    expect(countBs("ABADWBBC")).toEqual(3);
  });
})
