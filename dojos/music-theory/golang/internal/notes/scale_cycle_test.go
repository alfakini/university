package notes

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type ScaleCycleSuite struct {
	suite.Suite
}

func (suite *ScaleCycleSuite) TestNewScaleCycle() {
	minorScale := NewScaleCycle(MinorScale)

	for _, interval := range MinorScale {
		suite.Equal(interval, <-minorScale.Intervals)
	}

	for _, interval := range MinorScale {
		suite.Equal(interval, <-minorScale.Intervals)
	}

	for _, interval := range MinorScale {
		suite.Equal(interval, <-minorScale.Intervals)
	}

	for _, interval := range MinorScale {
		suite.Equal(interval, <-minorScale.Intervals)
	}
}

func TestScaleCycleSuite(t *testing.T) {
	suite.Run(t, new(ScaleCycleSuite))
}
