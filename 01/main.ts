import { input } from "./input.ts";

const lefts: number[] = [];
const rights: number[] = [];

for (let row of input.split("\n")) {
  const [left, right] = row.split("   ");
  lefts.push(parseInt(left));
  rights.push(parseInt(right));
}

lefts.sort();
rights.sort();

let sum = 0;

for (let i = 0; i < lefts.length; i++) {
  sum += Math.abs(lefts[i] - rights[i]);
}

console.log({ sum });
