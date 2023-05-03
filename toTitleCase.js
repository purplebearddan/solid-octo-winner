const toTitleCase = (inputString) => {
  // convert all of the string into lowercase
  inputString = inputString.toLowerCase();

  // split the string into words
  const words = inputString.includes(" ")
    ? inputString.split(" ")
    : [inputString];

  // return a map of the words that is joined at the spaces
  return words
    .map((word) => {
      // split the word into letters
      let letters = word.split("");

      // capitalise the first letter
      letters[0] = letters[0].toUpperCase();

      // join the letters back into words
      return letters.join("");
    })
    .join(" ");
};
