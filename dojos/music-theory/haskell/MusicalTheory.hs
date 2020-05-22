import Test.HUnit

data NaturalNote = C | D | E | F | G | A | B deriving (Show, Eq, Enum)
data Note = Natural NaturalNote | Sharp NaturalNote | Flat NaturalNote deriving (Show, Eq)

data Interval = Half | Whole
type Jump = [Interval]

notes = cycle [Natural C,
               Sharp C,
               Natural D,
               Sharp D,
               Natural E,
               Natural F,
               Sharp F,
               Natural G,
               Sharp G,
               Natural A,
               Sharp A,
               Natural B]

nextNote B = C
nextNote note = succ note

valueOf Half = 1
valueOf Whole = 2

convert (Natural note1) (Sharp note2) = if note1 == note2
                                        then (Natural note1, Flat (nextNote note2))
                                        else (Natural note1, Sharp note2)
convert (Flat note1) (Sharp note2) = if note1 == note2
                                     then (Flat note1, Flat (nextNote note2))
                                     else (Flat note1, Sharp note2)
convert note1 note2 = (note1, note2)

uniqueNotes :: [Note] -> [Note]
uniqueNotes [n] = [n]
uniqueNotes (note1:(note2:ns)) = converted1:(uniqueNotes (converted2:ns)) where
                                    (converted1, converted2) = convert note1 note2

shift [interval] notes = drop (valueOf interval) notes
shift (interval:is) notes = shift is (drop (valueOf interval) notes)

scale :: Note -> [Jump] -> [Note]
scale root jumps = uniqueNotes (root:(scale' (dropWhile (/= root) notes) jumps))

scale' _ [] = []
scale' notes (jump:js) = newNote:(scale' (newNote:ns) js) where (newNote:ns) = shift jump notes

majorScaleJumps = map (\x -> [x]) [Whole, Whole, Half, Whole, Whole, Whole]
minorScaleJumps = map (\x -> [x]) [Whole, Half, Whole, Whole, Half, Whole]

majorTriad = [[Whole, Whole], [Whole, Half]]

cMajorScale = TestCase $ assertEqual "C Major Scale"
              [Natural C, Natural D, Natural E, Natural F, Natural G, Natural A, Natural B]
              (scale (Natural C) majorScaleJumps)

cMinorScale = TestCase $ assertEqual "C Minor Scale"
              [Natural C, Natural D, Flat E, Natural F, Natural G, Flat A, Flat B]
              (scale (Natural C) minorScaleJumps)

cMajorTriad = TestCase $ assertEqual "C Major Triad"
              [Natural C, Natural E, Natural G]
              (scale (Natural C) majorTriad)

runTests :: IO Counts
runTests = runTestTT $ TestList [cMajorScale, cMinorScale, cMajorTriad]
