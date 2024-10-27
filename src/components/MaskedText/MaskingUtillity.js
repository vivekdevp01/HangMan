export function getAllCharacters(originalWord, guessedWord) {
  guessedWord = guessedWord.map((letter) => letter.toUpperCase());
  const guessedLetterSet = new Set(guessedWord);

  const result = originalWord
    .toUpperCase()
    .split("")
    .map((char) => {
      if (guessedLetterSet.has(char)) {
        return char;
      } else {
        return "_";
      }
    });

  return result;
}
