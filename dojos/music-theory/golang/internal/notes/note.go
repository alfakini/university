package notes

// Note representation over int
type Note int

// NewNote from string
func NewNote(note string) Note {
	return map[string]Note{
		"C":  C,
		"C#": CSharp,
		"D":  D,
		"D#": DSharp,
		"E":  E,
		"F":  F,
		"F#": FSharp,
		"G":  G,
		"G#": GSharp,
		"A":  A,
		"A#": ASharp,
		"B":  B,
	}[note]
}

// Note enums
var (
	C      = Note(0)
	CSharp = Note(1)
	D      = Note(2)
	DSharp = Note(3)
	E      = Note(4)
	F      = Note(5)
	FSharp = Note(6)
	G      = Note(7)
	GSharp = Note(8)
	A      = Note(9)
	ASharp = Note(10)
	B      = Note(11)
)

// NextWithInterval add note and shift with inteval
func (note Note) NextWithInterval(interval Interval) Note {
	return Note((int(note) + int(interval))) % 12
}

// String note
func (note Note) String() string {
	return map[Note]string{
		C:      "C",
		CSharp: "C#",
		D:      "D",
		DSharp: "D#",
		E:      "E",
		F:      "F",
		FSharp: "F#",
		G:      "G",
		GSharp: "G#",
		A:      "A",
		ASharp: "A#",
		B:      "B",
	}[note]
}
