import {
  vectorAdd,
  reverseVector,
  getPathThroughDiagonals,
} from "./product-of-diagonals";

test.skip("Vector multiplications work", () => {
  expect(vectorAdd([1, 5], [[2], [10]])).toStrictEqual([2, 50]);
});

test.skip("Column vector can be reversed", () => {
  expect(reverseVector([[0], [1]])).toStrictEqual([[1], [0]]);
});

const testArray: number[][] = [
  [1, 4, 7, 6, 5],
  [-3, 2, 8, 1, 3],
  [6, 2, 9, 7, -4],
  [1, -2, 4, -2, 6],
  [3, 2, 2, -4, 7],
];

const testArray2: number[][] = [[1]];

const testArray3: number[][] = [
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
];

const testArray4: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

test("Zig-zag path is identified", () => {
  expect(getPathThroughDiagonals(testArray)).toStrictEqual(1098),
    expect(getPathThroughDiagonals(testArray2)).toStrictEqual(0),
    expect(getPathThroughDiagonals(testArray3)).toStrictEqual(0),
    expect(getPathThroughDiagonals(testArray4)).toStrictEqual(-72);
});
