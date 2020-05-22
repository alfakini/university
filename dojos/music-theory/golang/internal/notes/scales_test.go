package notes

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type ScalesSuite struct {
	suite.Suite
}

func (suite *ScalesSuite) TestMajorScale() {
	suite.Contains(MajorScale, Half)
	suite.Contains(MajorScale, Whole)
	suite.NotContains(MajorScale, WholeHalf)
}

func (suite *ScalesSuite) TestMinorScale() {
	suite.Contains(MinorScale, Half)
	suite.Contains(MinorScale, Whole)
	suite.NotContains(MinorScale, WholeHalf)
}

func TestScalesSuite(t *testing.T) {
	suite.Run(t, new(ScalesSuite))
}
