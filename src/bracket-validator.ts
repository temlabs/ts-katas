interface bracket {
  open: string;
  close: string;
  count: number;
}

function validateBrackets(inputString: string): boolean {
  const curlyBrace: bracket = { open: "{", close: "}", count: 0 };
  const squareBracket: bracket = { open: "[", close: "]", count: 0 };
  const roundBrace: bracket = { open: "(", close: ")", count: 0 };
  const bracketArray: bracket[] = [curlyBrace, squareBracket, roundBrace];

  let closeBracketFound = false;
  const openingIndexes: number[] = [];

  for (let i = 0; i < inputString.length; i++) {
    const [closingBracket, bracketIndex] = isClosingBracket(
      inputString[i],
      bracketArray,
    );
    if (closingBracket) {
      bracketArray[bracketIndex].count = bracketArray[bracketIndex].count - 1;
      closeBracketFound = true;
      const correspondingOpenBracket = bracketArray[bracketIndex].open;
      if (bracketArray[bracketIndex].count < 0) {
        return false;
      }

      const latestOpeningIndex = openingIndexes[openingIndexes.length - 1];
      if (inputString[latestOpeningIndex] !== correspondingOpenBracket) {
        return false;
      }
      openingIndexes.pop();
    } else {
      bracketArray[bracketIndex].count = bracketArray[bracketIndex].count + 1;
      openingIndexes.push(i);
    }
  }

  if (!closeBracketFound) {
    return false;
  }
  return true;
}

function isClosingBracket(
  char: string,
  bracketArray: bracket[],
): [boolean, number] {
  for (let i = 0; i < bracketArray.length; i++) {
    if (char === bracketArray[i].close) {
      return [true, i];
    } else if (char === bracketArray[i].open) {
      // assumes different delimiters don't share same open/close.
      return [false, i];
    }
  }
  return [false, -1];
}

export default validateBrackets;

/**
 * To have it accept open bars and other delimiters with identical open and close characters,
 * it woudld need to pa
 */
