package notes

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type NoteCycleSuite struct {
	suite.Suite
}

func (suite *NoteCycleSuite) TestNewNoteCycle() {
	cycle := NewNoteCycle(C, MajorScale)
	suite.NotNil(cycle)

	suite.Equal(C, <-cycle.Produced)
	suite.Equal(D, <-cycle.Produced)
}

func (suite *NoteCycleSuite) TestNewCycleAtNote() {
	cycle := NewCycleAtNote("C", MajorScale)
	suite.NotNil(cycle)

	suite.Equal(C, <-cycle.Produced)
	suite.Equal(D, <-cycle.Produced)
}

func TestNoteCycleSuite(t *testing.T) {
	suite.Run(t, new(NoteCycleSuite))
}
