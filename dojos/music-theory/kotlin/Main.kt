data class Note(val name: String) 
{
    fun flatten() = Note(name[0].toString() + 'b')
}

val Notes by lazy {
    listOf("C", "C#", "D", "D#", "E", "F", 
           "F#", "G", "G#", "A", "A#", "B")
    	.map { Note(it) }
}

enum class Interval(val value: Int) {
    Half(1),
    Whole(2),
    WholeAndHalf(3);
    
    operator fun times(multiplier: Int) =
        Array(multiplier) { this }
}

infix fun Note.hasSameLetterOf(note: Note) =
    this.name.startsWith(note.name[0])

/**
 * Changes note names to avoid repeated letters (e.g. "F" followed by "F#").
 */
fun uniqueNotes(notes: List<Note>): List<Note> 
{
    val newNotes = notes.toMutableList()
    
    return notes.foldIndexed(newNotes) { i, acc, note ->
        val cycle = CyclicIterator(acc).apply { next(i) }
        val chromaticCycle = CyclicIterator(Notes)
        
    	if (cycle.prev() hasSameLetterOf note)
            acc.apply { 
                set(i, chromaticCycle.next(Notes.indexOf(note) + 1).flatten()) 
            }
        else 
            acc
    }
}

open class Scale(val root: Note, vararg val intervals: Interval) 
{
    fun notes(): List<Note> {
        val iterator = CyclicIterator(Notes)

        iterator.next(Notes.indexOf(root))

        val notes = intervals.dropLast(1).fold(mutableListOf(root)) { 
            acc, interval -> acc.apply { add(iterator.next(interval.value)) }
        }
        
        return uniqueNotes(notes)
    }
}

object Scales 
{
    class Major(root: Note) 
        : Scale(root, Interval.Whole, 
                      Interval.Whole, 
                      Interval.Half,
                      Interval.Whole,
                      Interval.Whole,
                      Interval.Whole,
                      Interval.Half)
    class Minor(root: Note)
    	: Scale(root, Interval.Whole,
                      Interval.Half,
                      Interval.Whole,
                      Interval.Whole,
                      Interval.Half,
                      Interval.Whole,
                      Interval.Whole)
}

open class Chord(val root: Note, val intervals: List<Array<Interval>>) 
{        
    fun notes(): List<Note> {
        val cyclicIterator = CyclicIterator(Notes).apply { next(Notes.indexOf(root)) }

        return intervals.fold(mutableListOf<Note>()) { 
            acc, intervals -> acc.apply {
                add(cyclicIterator.next(intervals.halfStepsCount)) 
            }
        }.apply { add(0, root) }
    }
    
    private val Array<Interval>.halfStepsCount get() =
        fold(0) { sum, interval -> sum + interval.value }
}

object Chords 
{
    class MajorTriad(root: Note) 
        : Chord(root, listOf(Interval.Whole * 2, 
                             Interval.Half * 3))
}

class CyclicIterator<T>(val list: List<T>) 
{
    private var position = 0
    
    val current get() = list[position]
    
    fun next(n: Int = 1) = 
        if (list.size == 0) {
            list[0]
        } else if (list.size > position + n) {
            position += n
            list[position]
        } else {
            position = position + n - list.size
            list[position]
        }
        
    fun prev(n: Int = 1) = 
        if (position - n < 0) {
            position = list.size - n
            list[position]
        } else {
            position = position - n
            list[position]
        }
}

fun <T> assertEquals(a: T, b: T) {
    try {
        assert(a == b)
    } catch (e: AssertionError) {
        println("Expected: $a")
        println("Received: $b")
        throw e
    }
}

fun main() {
    assertEquals(
        listOf("Db", "Eb", "F", "Gb", "Ab", "Bb", "C"),
        Scales.Major(root = Note("C#")).notes().map { it.name }        
    )
    assertEquals(
        listOf("B", "C#", "D#", "E", "F#", "G#", "A#"),
    	Scales.Major(root = Note("B")).notes().map { it.name }       
    )
    assertEquals(
        listOf("Bb", "C", "D", "Eb", "F", "G", "A"),
    	Scales.Major(root = Note("A#")).notes().map { it.name }
    )
    assertEquals(
        listOf("Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"),
        Scales.Major(root = Note("F#")).notes().map { it.name }
    )
    assertEquals(
    	listOf("C", "D", "Eb", "F", "G", "Ab", "Bb"),
        Scales.Minor(root = Note("C")).notes().map { it.name }
    )
    assertEquals(
    	listOf("C", "E", "G"),
        Chords.MajorTriad(root = Note("C")).notes().map { it.name }
    )
    assertEquals(
    	listOf("D", "F#", "A"),
        Chords.MajorTriad(root = Note("D")).notes().map { it.name }
    )
    println("All tests passed!")
}
