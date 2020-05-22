require "spec"
require "../src/music-theory"

describe Music::Theory do
  it "returns C major scale" do
    Music::Theory::Scale.major("C").should eq(["C", "D", "E", "F", "G", "A", "B"])
  end

  it "returns C-sharp major scale" do
    Music::Theory::Scale.major("C#").should eq(["C#", "D#", "F", "F#", "G#", "A#", "C"])
  end

  it "returns D major scale" do
    Music::Theory::Scale.major("D").should eq(["D", "E", "F#", "G", "A", "B", "C#"])
  end

  it "returns D-sharp major scale" do
    Music::Theory::Scale.major("D#").should eq(["D#", "F", "G", "G#", "A#", "C", "D"])
  end

  it "returns E major scale" do
    Music::Theory::Scale.major("E").should eq(["E", "F#", "G#", "A", "B", "C#", "D#"])
  end

  it "returns F minor scale" do
    Music::Theory::Scale.minor("F").should eq(["F", "G", "G#", "A#", "C", "C#", "D#"])
  end

  it "returns F-sharp minor scale" do
    Music::Theory::Scale.minor("F#").should eq(["F#", "G#", "A", "B", "C#", "D", "E"])
  end

  it "returns G minor scale" do
    Music::Theory::Scale.minor("G").should eq(["G", "A", "A#", "C", "D", "D#", "F"])
  end

  it "returns G-sharp minor scale" do
    Music::Theory::Scale.minor("G#").should eq(["G#", "A#", "B", "C#", "D#", "E", "F#"])
  end

  it "returns A minor scale" do
    Music::Theory::Scale.minor("G#").should eq(["G#", "A#", "B", "C#", "D#", "E", "F#"])
  end

  it "returns A-sharp minor scale" do
    Music::Theory::Scale.minor("A#").should eq(["A#", "C", "C#", "D#", "F", "F#", "G#"])
  end
end
