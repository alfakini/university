module Music::Theory
  VERSION = "0.1.0"

  NOTES = [
    "C", "C#", "D", "D#", "E", "F",
    "F#", "G", "G#", "A", "A#", "B",
  ]

  module Scale
    extend self

    def major(root)
      scale(root, [2, 2, 1, 2, 2, 2, 1])
    end

    def minor(root)
      scale(root, [2, 1, 2, 2, 1, 2, 2])
    end

    private def scale(root, intervals)
      cycle_iterator = NOTES.each.cycle.skip_while { |note| note != root }

      intervals.map { |interval| cycle_iterator.step(interval).next }
    end
  end
end
