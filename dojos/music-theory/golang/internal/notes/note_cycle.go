package notes

// NoteCycle produced by go routine
type NoteCycle struct {
	Produced   chan Note
	ScaleCycle *ScaleCycle
}

// NewNoteCycle constructor
func NewNoteCycle(first Note, scale []Interval) *NoteCycle {
	cycle := &NoteCycle{
		Produced:   make(chan Note, 12),
		ScaleCycle: NewScaleCycle(scale),
	}

	go func() {
		note := first
		for {
			cycle.Produced <- note
			note = note.NextWithInterval(<-cycle.ScaleCycle.Intervals)
		}
	}()

	return cycle
}

// NewCycleAtNote start a cicle started at note string
func NewCycleAtNote(note string, scale []Interval) *NoteCycle {
	return NewNoteCycle(NewNote(note), scale)
}
