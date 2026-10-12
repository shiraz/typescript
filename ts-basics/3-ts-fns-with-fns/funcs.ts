export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFn = (num: number) => number;

export function arrayMutate(nums: number[], mutate: MutationFn): number[] {
  return nums.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

const myMutateFn = (v: number) => v * 10;

console.log(arrayMutate([1, 2, 3], myMutateFn));

export function createAdder(num: number): MutationFn {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
