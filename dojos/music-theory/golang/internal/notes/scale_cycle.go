package notes

// ScaleCycle produced by go routine
type ScaleCycle struct {
	Intervals chan Interval
}

// NewScaleCycle based in intervals
func NewScaleCycle(intervals []Interval) *ScaleCycle {
	cycle := &ScaleCycle{
		Intervals: make(chan Interval, len(intervals)),
	}

	go func() {
		for {
			for _, interval := range intervals {
				cycle.Intervals <- interval
			}
		}
	}()

	return cycle
}
