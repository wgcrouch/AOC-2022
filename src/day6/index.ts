import { input } from "./input";

export function day6Part1() {
  const tracking = new Set();
  for (let i = 0; i < input.length; i++) {
    // console.log(tracking.size);
    const char = input[i];
    if (tracking.size === 4) {
      return i - 1;
    }
    if (!tracking.has(char)) {
      tracking.add(char);
    } else {
      tracking.clear();
    }
  }

  return undefined;
}

export function day6Part2() {
  let start = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    // console.log({
    //   i,
    //   start,
    //   char
    // });
    if (i - start === 14) {
      return i;
    }
    const sub = input.substring(start, i);
    // console.log(sub);
    // console.log(sub.includes(char));
    if (sub.includes(char)) {
      const index = sub.indexOf(char);
      // console.log(index);
      start = start + index + 1;
    }
  }

  return undefined;
}
