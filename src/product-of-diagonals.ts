export function getPathThroughDiagonals(inputArray: number[][]): number {
  const n: number = inputArray.length;
  let sumOfRightDiagonals = 0;
  let sumOfLeftDiagonals = 0;
  let indexVector = [0, 0]; // i,j
  let incrementVector: number[][] = [[1], [0]]; // start by moving one down

  if (inputArray.length === 1) {
    return 0;
  }

  while (indexVector[0] * indexVector[1] <= (n - 1) * (n - 1)) {
    const numbersInRightDiagonal: number[] = getNumbersInRightDiagonal(
      indexVector,
      inputArray,
    ); // get numbers in right diagonal
    const rightDiagonalProduct = multiplyNumberArray(numbersInRightDiagonal); // get sum of right diagonal

    const leftIndexVector: number[] = [
      indexVector[0],
      indexVector[1] * -1 + (n - 1),
    ]; // reflect index vector about the y axis going through middle of array
    const numbersInLeftDiagonal: number[] = getNumbersInLeftDiagonal(
      leftIndexVector,
      inputArray,
    ); // get numbers in right diagonal
    const leftDiagonalProduct = multiplyNumberArray(numbersInLeftDiagonal); // get sum of right diagonal

    sumOfRightDiagonals = sumOfRightDiagonals + rightDiagonalProduct;
    sumOfLeftDiagonals = sumOfLeftDiagonals + leftDiagonalProduct; // add it to the sum of diagonals
    incrementVector = reverseVector(incrementVector);
    indexVector = vectorAdd(indexVector, incrementVector);
  }

  return sumOfLeftDiagonals - sumOfRightDiagonals;
}

function getNumbersInRightDiagonal(
  indexPair: number[],
  inputArray: number[][],
): number[] {
  // these are the diagonals going up from bottom left to top right (North-East).
  const n = inputArray.length;
  const numbersInDiagonal: number[] = [];
  const topRowHit = (i: number) => i === 0;
  const rightColumnHit = (j: number) => j === n - 1;
  const bottomRowHit = (i: number) => i === n - 1;
  const leftColumnHit = (j: number) => j === 0;
  const northEastVector = [[-1], [1]];
  while (!topRowHit(indexPair[0]) && !rightColumnHit(indexPair[1])) {
    indexPair = vectorAdd(indexPair, northEastVector);
  }

  const southWestVector = [[1], [-1]];
  while (!bottomRowHit(indexPair[0]) && !leftColumnHit(indexPair[1])) {
    const valueToPush: number = inputArray[indexPair[0]][indexPair[1]]; // get value
    numbersInDiagonal.push(valueToPush); // add it to the array
    indexPair = vectorAdd(indexPair, southWestVector); // modify access
  }
  const valueToPush: number = inputArray[indexPair[0]][indexPair[1]]; // get last value
  numbersInDiagonal.push(valueToPush); // add it to the array

  return numbersInDiagonal;
}

function getNumbersInLeftDiagonal(
  indexPair: number[],
  inputArray: number[][],
): number[] {
  // these are the diagonals going up from bottom right to top left (North-West).
  const n = inputArray.length;
  const numbersInDiagonal: number[] = [];
  const topRowHit = (i: number) => i === 0;
  const rightColumnHit = (j: number) => j === n - 1;
  const bottomRowHit = (i: number) => i === n - 1;
  const leftColumnHit = (j: number) => j === 0;
  const northWestVector = [[-1], [-1]];
  while (!topRowHit(indexPair[0]) && !leftColumnHit(indexPair[1])) {
    indexPair = vectorAdd(indexPair, northWestVector);
  }

  const southEastVector = [[1], [1]];
  while (!bottomRowHit(indexPair[0]) && !rightColumnHit(indexPair[1])) {
    const valueToPush: number = inputArray[indexPair[0]][indexPair[1]]; // get value
    numbersInDiagonal.push(valueToPush); // add it to the array
    indexPair = vectorAdd(indexPair, southEastVector); // modify access
  }
  const valueToPush: number = inputArray[indexPair[0]][indexPair[1]]; // get last value
  numbersInDiagonal.push(valueToPush); // add it to the array

  return numbersInDiagonal;
}

function multiplyNumberArray(arrToSum: number[]): number {
  const initialValue = 1;
  const sumWithInitial = arrToSum.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    initialValue,
  );
  return sumWithInitial;
}

export function vectorAdd(
  rowVector: number[],
  scalingVector: number[][],
): number[] {
  // no validation, we assume that vector1 is a*b and vector 2 is c*d and that b=c
  const answer: number[] = [];
  rowVector.forEach((value, index) => {
    answer.push(value + scalingVector[index][0]);
  });
  return answer;
}

export function reverseVector(vectorToReverse: number[][]): number[][] {
  const answer: number[][] = [];
  for (let i = vectorToReverse.length - 1; i >= 0; i--) {
    answer.push(vectorToReverse[i]);
  }
  return answer;
}
