import { sort } from "./src/sort";

describe("sortArray", () => {
  it("returns an empty array if the input array is empty", () => {
    const array = [];
    const sortedArray = sort(array);
    expect(sortedArray).toEqual([]);
  });

  it("returns an array with the same element if the input array contains a single element", () => {
    const array = [1];
    const sortedArray = sort(array);
    expect(sortedArray).toEqual([1]);
  });

  it("sorts an array of numbers in ascending order", () => {
    const array = [3, 1, 4, 2];
    const sortedArray = sort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4]);
  });

  it("sorts an array of strings in alphabetical order", () => {
    const array = ["banana", "apple", "cherry", "date"];
    const sortedArray = sort(array);
    expect(sortedArray).toEqual(["apple", "banana", "cherry", "date"]);
  });

  it("sorts an array of characters", () => {
    const array = ["b", "a", "x", "d"];
    const sortedArray = sort(array);
    expect(sortedArray).toEqual(["a", "b", "d", "x"]);
  });
});
