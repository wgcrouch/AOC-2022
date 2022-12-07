import { input } from "./input";

export const day1Part1 = () => {
  let max = 0;
  let currentTotal = 0;
  for (let line of input.split("\n")) {
    if (line === "") {
      currentTotal = 0;
    } else {
      currentTotal += Number(line);
      if (currentTotal > max) {
        max = currentTotal;
      }
    }
  }

  return max;
};

export const day1Part2 = () => {
  let totals = [];
  let currentTotal = 0;
  for (let line of input.split("\n")) {
    if (line === "") {
      totals.push(currentTotal);
      currentTotal = 0;
    } else {
      currentTotal += Number(line);
    }
  }
  const sorted = totals.sort().reverse();

  return sorted.slice(0, 3).reduce((o, i) => o + i, 0);
};
