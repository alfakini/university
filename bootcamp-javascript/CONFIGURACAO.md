# Configuração do ambiente de trabalho

Durante o curso vamos treinar o que estamos aprendendo em exercícios práticos. A seguir segue a lista de dependências para configuração dos ambientes de trabalho:

* Git ([instalação](https://git-scm.com/))
* Node.js ([instalação](https://nodejs.org/en/download/))
* Jest ([instalação[(https://jestjs.io/docs/en/getting-started))

**Instalação**

Instale o Git e o Node.js como indicado nos links. Abaixo estão instruções de instalação para Linux, macOS e Windows.

```sh
npm install -g jest
```

**Windows**

Recomendamos o uso de Windows 8 ou superior com o PowerShell instalado. A forma mais fácil de instalar as dependências no ambiente Windows é usando o [Chocolatey](https://chocolatey.org):

```sh
choco install nodejs.install
choco install git
```

Siga a [instalação do Git](https://git-scm.com/) e a [instalação do Node](https://nodejs.org/en/download/) caso prefira não usar o comando `choco`.

**Linux**

```sh
sudo apt-get install -y build-essential
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y git nodejs
```

**macOS**

Recomendamos o uso do [Homebrew](https://brew.sh/) para realizar a instalação das dependências no macOS:

```sh
brew install node
brew install git
```

**Verificando a instalação**

Verifique se os pacotes foram corretamente instalados, digitando no console:

```sh
node --version
```
