declare global {
    interface Array<T> {
        isSorted(): boolean;
    }
}

Array.prototype.isSorted = function isSorted(): boolean {
  if (!this.every((element: any) => typeof element === "number")) {
    throw new Error("Array contains non-number elements");
  }
  for (let i = 0; i < this.length - 1; ++i)
    if (this[i] > this[i + 1]) return false;
  return true;
};

export {};