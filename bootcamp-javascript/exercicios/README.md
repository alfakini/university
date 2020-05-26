[![Build Status](https://travis-ci.org/bootcamp-joinville/katas-part-one.svg?branch=master)](https://travis-ci.org/bootcamp-joinville/katas-part-one)

# Bootcamp Joinville - JavaScript Katas

Exercícios de código para o aprendizado da linguagem JavaScript.

## Instruções

1. [Acesse o github classroom](https://classroom.github.com/a/QYmlNgh0) para ganhar acesso a este repositório;
2. Após o projeto ser copiado para seu usuário pessoal, clone o projeto na sua máquina local;
3. Edite o arquivo README.md e mude o endereço do `Build Status` para o endereço do seu repositório;
4. Instale o Jest para executar os testes unitários:

```sh
npm install -g jest
```

5. Instale as dependências do projeto executando o comando `npm install`:

```sh
npm install
```

## Exercícios

Para resolver os exercícios, basta implementar o código onde existir o comentário `// IMPLEMENTE` ou colocar a resposta no lugar da constante `RESPOSTA`.

**Exemplos**

Para o código a seguir:

```javascript
function hello(name) {
  // IMPLEMENTE
}

describe('hello', function() {
  it('deve retornar Hello, Alan!', function() {
    expect(hello('Alan')).toEqual('Hello, Alan!');
  });
});
```

a resposta do exercício deve ser:

```javascript
function hello(name) {
  return "Hello, " + name + "!";
}

describe('hello', function() {
  it('deve retornar Hello, Alan!', function() {
    expect(hello('Alan')).toEqual('Hello, Alan!');
  });
});
```

Repare nas chamadas das funções `describe`, `it` e `expect`. Achou estranho?

O que estamos fazendo nestes exercícios é usar uma técnica chamada [TDD](https://pt.wikipedia.org/wiki/Test_Driven_Development).
Com ela, escrevemos testes unitários que testam o comportamento do nosso código antes de escrever o código
propriamente dito. Dessa forma, toda vez que você resolver os exercícios corretamente, o teste
correspondente deve passar. Toda vez que responder errado, o teste deve falhar. Assim
você consegue, ao final dos exercícios, saber que acertou a resposta de todos eles.

As funções `describe`, `it` e `expect` são adicionadas pelo framework de testes [Jest](https://jestjs.io/docs/en/getting-started),
um framework criado pelo Facebook e muito utilizado pela comunidade JavaScript. Elas nos ajudam a descrever os testes do nosso código.


Para executar otodos s testes unitários do projeto, execute:

```sh
jest
```

Para executar apenas um arquivo:

```sh
jest arquivo.js
```

Você pode ainda executar os testes usando o escopo de apenas um `describe` ou `it`. Para o nosso teste de exemplo acima, podemos executar
da seguinte forma para o texto do `describe`:

```sh
jest -t "hello"
```

ou então pelo texto do `it`:

```sh
jest -t "deve retornar Hello"
```

Você também pode manter o jest rodando no console enquanto edita o código para ir acompanhando os testes sendo executados em tempo de edição:

```sh
jest --watch
```

## Configuração do ambiente de trabalho

Siga as instruções em [CONFIGURACAO.md](https://github.com/bootcamp-joinville/javascript-syllabus/blob/master/CONFIGURACAO.md).
