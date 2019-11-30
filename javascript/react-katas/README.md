# React Katas

Exercícios de código para o aprendizado da linguagem JavaScript e React.

Arquivos dos exercícios:

* **1-programs.test.js**: Exercícios sobre estruturas de programas em JavaScript;
* **2-arrays.test.js**: Exercícios sobre arrays;
* **3-objects.test.js**: Exercícios sobre objects/maps;
* **4-functions.test.js**: Exercícios sobre funções;
* **5-high-order-functions.test.js**: Exercícios sobre funções de alta ordem;
* **6-identacao.md**: Exercício sobre identação de código;

Para resolver os exercícios, basta implementar o código onde existir o comentário `// IMPLEMENTE` ou
colocar a resposta no lugar da constante `RESPOSTA`.

**Exemplo**

Para o código a seguir:

```javascript
function hello(name) {
  // IMPLEMENTE
}

describe('hello', function() {
  it('deve retornar Hello, Marvin!', function() {
    expect(hello('Marvin')).toBe('Hello, Marvin!');
  });
});
```

A resposta do exercício deve ser:

```javascript
function hello(name) {
  return `Hello, ${name}!`;
}

describe('hello', function() {
  it('deve retornar Hello, Marvin!', function() {
    expect(hello('Marvin')).toBe('Hello, Marvin!');
  });
});
```

## Dependências

Para executar o código precisamos do Node e para instalar as dependências do projeto precisamos do yarn.

* Node.js ([instalação](https://nodejs.org/en/download/))
* Yarn ([instalação](https://yarnpkg.com/lang/en/docs/install/#windows))

## Instalação

Instale o Node.js e o Yarn como indicado no link. Abaixo estão instruções de instalação para Linux, macOS e Windows.

### Windows

Usando o choco:

```sh
choco install nodejs.install
choco install yarn
```

Siga a [instalação do Node](https://nodejs.org/en/download/)) e ([instalação do Yarn](https://yarnpkg.com/lang/en/docs/install/#windows)).

### Linux

```sh
sudo apt-get install -y build-essential
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

### macOS

```sh
brew install node
brew install yarn
```

### Verificando a instalação

Verifique se os pacotes foram corretamente instalados, digitando no console:

```sh
node --version
yarn --version
```

## Instalação das dependências

Instale o Jest para executar os testes unitários:

```sh
yarn global add jest
```

Instale as dependências do projeto executando o comando yarn:

```sh
yarn
```

## Testes

Para executar os testes unitários, execute:

```sh
jest
```

Você também pode manter o jest rodando no console enquanto edita o código:

```sh
jest --watch
```
