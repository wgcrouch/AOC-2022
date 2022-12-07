import { input } from "./input";

// const input = `2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8`;

export function day4Part1() {
  const lines = input
    .split("\n")
    .map((line) => line.split(",").map((part) => part.split("-").map(Number)));

  let contains = 0;

  lines.forEach(([a, b]) => {
    const [a1, a2] = a;
    const [b1, b2] = b;
    // console.log({ a1, a2, b1, b2 });
    if (a1 >= b1 && a2 <= b2) {
      // console.log("contains");
      contains++;
    } else if (a1 <= b1 && a2 >= b2) {
      // console.log("contains");
      contains++;
    }
  });
  return contains;
}

export function day4Part2() {
  const lines = input
    .split("\n")
    .map((line) => line.split(",").map((part) => part.split("-").map(Number)));

  let overlap = 0;

  lines.forEach(([a, b]) => {
    const [a1, a2] = a;
    const [b1, b2] = b;
    // console.log({ a1, a2, b1, b2 });
    if (a1 >= b1 && a1 <= b2) {
      // console.log("contains");
      overlap++;
    } else if (a2 >= b1 && a2 <= b2) {
      // console.log("contains");
      overlap++;
    } else if (b1 >= a1 && b1 <= a2) {
      // console.log("contains");
      overlap++;
    } else if (b2 >= a1 && b2 <= a2) {
      // console.log("contains");
      overlap++;
    }
  });
  return overlap;
}
