package main

import (
	"fmt"
	"os"

	"github.com/magrathealabs/dojos/music-theory/golang/internal/notes"
)

// PrintCycle produced by goroutine
func PrintCycle(cycle *notes.NoteCycle) {
	fmt.Fprintf(
		os.Stdout,
		"%s %s %s %s %s %s %s\n",
		(<-cycle.Produced).String(),
		(<-cycle.Produced).String(),
		(<-cycle.Produced).String(),
		(<-cycle.Produced).String(),
		(<-cycle.Produced).String(),
		(<-cycle.Produced).String(),
		(<-cycle.Produced).String(),
	)
}

// ScanCycle from io
func ScanCycle() []*notes.NoteCycle {
	var input string
	fmt.Fscanf(os.Stdin, "%s", &input)

	return []*notes.NoteCycle{
		notes.NewCycleAtNote(input, notes.MajorScale),
		notes.NewCycleAtNote(input, notes.MinorScale),
	}
}

func main() {
	cycles := ScanCycle()

	for _, cycle := range cycles {
		PrintCycle(cycle)
	}
}
