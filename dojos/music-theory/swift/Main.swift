//
//  main.swift
//  MusicTheory
//
//  Created by Gustavo Diel on 01/08/19.
//  Copyright © 2019 Gustavo Diel. All rights reserved.
//

enum Note: String, CaseIterable {
    case C = "C"
    case Cs = "C#"
    case D = "D"
    case Ds = "D#"
    case E = "E"
    case F = "F"
    case Fs = "F#"
    case G = "G"
    case Gs = "G#"
    case A = "A"
    case As = "A#"
    case B = "B"
}

enum Interval: Int {
    case Still = 0
    case Half = 1
    case Whole = 2
}

class Scale {
    let root: Note
    let intervals: [Interval]

    init(root: Note, intervals: [Interval]) {
        self.root = root
        self.intervals = intervals
    }

    func showScale() -> [String] {
        var notes = [root]
        var index = Note.allCases.lastIndex(of: notes.last!)!

        intervals.forEach { (interval) in
            let nextNoteIndex = (index + interval.rawValue) % Note.allCases.count

            notes.append(Note.allCases[nextNoteIndex])

            index = Note.allCases.lastIndex(of: notes.last!)!
        }

        notes = notes.dropLast()

        return notes.map { (note) -> String in
            noteName(note: note)
        }
    }

    internal func noteName(note: Note) -> String {
        return note.rawValue
    }
}

class Major: Scale {
    init(root: Note) {
        super.init(root: root, intervals: [
                Interval.Whole,
                Interval.Whole,
                Interval.Half,
                Interval.Whole,
                Interval.Whole,
                Interval.Whole,
                Interval.Half
            ]
        )
    }
}

class Minor: Scale {
    init(root: Note) {
        super.init(root: root, intervals: [
                Interval.Whole,
                Interval.Half,
                Interval.Whole,
                Interval.Whole,
                Interval.Half,
                Interval.Whole,
                Interval.Whole
            ]
        )
    }

    override func noteName(note: Note) -> String {
        switch note {
            case .Cs:
                return "Db"
            case .Ds:
                return "Eb"
            case .Fs:
                return "Gb"
            case .Gs:
                return "Ab"
            case .As:
                return "Bb"
        default:
            return note.rawValue
        }
    }
}

extension Array {
    var prettify: String  {
        var str = ""
        self.forEach { str += "\($0) " }

        return str
    }
}

class CScaleSpec {
    static func testCMinorScale() {
        let note: Note = .C
        let expectedScale = ["C", "D", "Eb", "F", "G", "Ab", "Bb"]
        let result = Minor(root: note).showScale()

        assert(result == expectedScale)
        print("C Minor scale: \(result.prettify)")
    }

    static func textCMajorScale() {
        let note: Note = .C
        let expectedScale = ["C", "D", "E", "F", "G", "A", "B"]
        let result = Major(root: note).showScale()

        assert(result == expectedScale)
        print("C Major scale: \(result.prettify)")
    }
}

if CommandLine.arguments.count < 2 {
    CScaleSpec.testCMinorScale()
    CScaleSpec.textCMajorScale()
} else {
    let firstArgument = CommandLine.arguments[1]

    if firstArgument.lowercased() == "test" {
        CScaleSpec.testCMinorScale()
        CScaleSpec.textCMajorScale()
    } else {
        let note = Note(rawValue: firstArgument)

        if let note = note {
            print("Minor: \(Minor(root: note).showScale().prettify)")
            print("Major: \(Major(root: note).showScale().prettify)")
        } else {
            print("Unknown note: \(firstArgument)")
        }
    }
}
