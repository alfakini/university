package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"testing"

	"github.com/stretchr/testify/suite"
)

type MainSuite struct {
	suite.Suite
}

func (suite *MainSuite) TestMain() {
	stdin, err := ioutil.TempFile("", "stdin")
	suite.NoError(err)
	suite.NotNil(stdin)

	stdout, err := ioutil.TempFile("", "stdout")
	suite.NoError(err)
	suite.NotNil(stdout)

	os.Stdin = stdin
	os.Stdout = stdout

	defer os.Remove(stdin.Name())
	defer os.Remove(stdout.Name())

	fmt.Fprintf(stdin, "C\n")

	suite.NotPanics(main)
}

func TestMainSuite(t *testing.T) {
	suite.Run(t, new(MainSuite))
}
