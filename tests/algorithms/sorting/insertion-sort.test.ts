import { generateRandomArray } from "../../utils/generate-unsorted-array";
import { insertionSort } from "../../../src/algorithms/sorting/insertion-sort";
import "../../utils/check-is-sorted";

const SMALL_ARRAY_SIZE = 100;

describe("given an unsorted array", () => {
  const array = generateRandomArray(SMALL_ARRAY_SIZE);
  const sortedArray = insertionSort(array);
  it("should return a sorted array", () => {
    expect(sortedArray.isSorted()).toBe(true);
  });
  it("should have the same size", () => {
    expect(sortedArray.length).toBe(SMALL_ARRAY_SIZE);
  });
});

describe("given an empty array", () => {
  const array = [];
  const sortedArray = insertionSort(array);
  it("should return an empty array", () => {
    expect(sortedArray.length).toBe(0);
  })
})