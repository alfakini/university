package notes

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type IntervalSuite struct {
	suite.Suite
}

func (suite *IntervalSuite) TestHalf() {
	suite.Equal(Interval(1), Half)
}

func (suite *IntervalSuite) TestWhole() {
	suite.Equal(Interval(2), Whole)
}

func (suite *IntervalSuite) TestWholeHalf() {
	suite.Equal(Interval(3), WholeHalf)

}

func TestIntervalSuite(t *testing.T) {
	suite.Run(t, new(IntervalSuite))
}
