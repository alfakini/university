## The Haskell Version

### Dependencies

- GHC (Glasgow Haskell Compiler). Install on debian based with `sudo apt install ghc`
- Cabal (package installer). Install on debian based with `sudo apt install cabal-install`
  - Then run `cabal install hunit` to get the testing package used

## Running

You can run it interactively on the terminal with GHCi
```sh
ghci MusicalTheory.hs
```

Then, on the GHCi prompt, you can call any function. Try calling `runTests` to run the test suit.

To get, for example, the D# major scale, go:

```
scale (Sharp D) majorScaleJumps
```
