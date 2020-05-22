require "option_parser"
require "./music-theory"

if ARGV.size == 0
  STDERR.puts "ERROR: Missing arguments. Use --help."
  exit(1)
end

scale = :major
note = ARGV.first || "C"

OptionParser.parse! do |parser|
  parser.banner = "Usage: scale <note>"
  parser.on("-M", "--major", "Major scale") { scale = :major }
  parser.on("-m", "--minor", "Minor scale") { scale = :minor }

  parser.on("-h", "--help", "Show this help") do
    puts parser
    exit(0)
  end

  parser.invalid_option do |flag|
    STDERR.puts "ERROR: #{flag} is not a valid option."
    STDERR.puts parser

    exit(1)
  end
end

output =
  case scale
  when :minor
    Music::Theory::Scale.minor(note)
  else
    Music::Theory::Scale.major(note)
  end

puts output.join(", ")
