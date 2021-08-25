import { arrayToTree, treeToArray } from "./converter";

describe("#arrayToTree", () => {
  test("odd case", () => {
    const input = [-10, -3, 0, 5, 9];
    const expected = [0, -3, 9, -10, null, 5];
    const output = arrayToTree(input);
    const converted = treeToArray(output);

    expect(converted).toEqual(expected);
  });

  test("even case", () => {
    const input = [1, 3];
    const expected = [3, 1];
    const output = arrayToTree(input);
    const converted = treeToArray(output);

    expect(converted).toEqual(expected);
  });
});
