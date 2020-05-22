package notes

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type NoteSuite struct {
	suite.Suite
}

func (suite *NoteSuite) TestNewNote() {
	suite.Equal(A, NewNote("A"))
	suite.Equal(B, NewNote("B"))
	suite.Equal(C, NewNote("C"))
	suite.Equal(D, NewNote("D"))
	suite.Equal(E, NewNote("E"))
	suite.Equal(F, NewNote("F"))
	suite.Equal(G, NewNote("G"))
}

func (suite *NoteSuite) TestNextWithInterval() {
	suite.Equal(B, A.NextWithInterval(Whole))
	suite.Equal(C, B.NextWithInterval(Half))
	suite.Equal(D, C.NextWithInterval(Whole))
	suite.Equal(E, D.NextWithInterval(Whole))
	suite.Equal(F, E.NextWithInterval(Half))
	suite.Equal(G, F.NextWithInterval(Whole))
	suite.Equal(A, G.NextWithInterval(Whole))
}

func TestNoteSuite(t *testing.T) {
	suite.Run(t, new(NoteSuite))
}
