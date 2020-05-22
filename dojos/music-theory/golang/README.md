# How to run

```sh
    bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)

    gvm install go1.12 -B
    gvm use go1.12
```

Caso queira alterar, recomendamos clonar dentro do $GOPATH para a IDE executar testes e obter a tipagem de forma correta:

```sh
    mkdir -p $GOPATH/src/github.com/magrathealabs/

    cd $GOPATH/src/github.com/magrathealabs/
    git clone git@github.com:magrathealabs/dojos.git
    cd dojos/music-theory/golang
```

Para atualizar ou obter novas dependências, utilizamos o Govendor:

```sh
    go get -u github.com/kardianos/govendor
```

Para verificar a qualidade do código, utilizamos o Golint-CI:

```sh
    go get -u github.com/golangci/golangci-lint/cmd/golangci-lint
    golangci-lint run
```

