import { input } from "./input";
import { chunk } from "lodash";

function score(char: string) {
  if (char.toLowerCase() === char) {
    return char.charCodeAt(0) - 96;
  }
  return char.charCodeAt(0) - 38;
}

export function day3Part1() {
  const lines = input.split("\n");

  let total = 0;

  lines.forEach((line) => {
    const length = line.length;
    const halfway = Math.floor(length / 2);

    const firstHalf = line.substring(0, halfway);
    const secondHalf = line.substring(halfway);

    const firstHalfChars: { [key: string]: string } = {};
    for (let i = 0; i < halfway; i++) {
      firstHalfChars[line[i]] = line[i];
    }

    const match = secondHalf
      .split("")
      .find((char) => firstHalfChars[char] !== undefined);

    if (match) {
      console.log({ firstHalf, secondHalf, match, score: score(match) });
      total += score(match);
    }
  });

  return total;
}

export function day3Part2() {
  const lines = input.split("\n");
  const groups = chunk(lines, 3);
  let total = 0;

  groups.forEach(([first, second, third]) => {
    const firstChars = first.split("");
    const secondChars = new Set(second.split(""));
    const thirdChars = new Set(third.split(""));

    const firstIntersection = new Set(
      firstChars.filter((x) => secondChars.has(x))
    );
    const secondIntersection = new Set(
      Array.from(firstIntersection).filter((x) => thirdChars.has(x))
    );

    console.log({
      firstChars,
      second,
      third,
      firstIntersection,
      secondIntersection
    });

    if (secondIntersection.size === 1) {
      total += score(Array.from(secondIntersection)[0]);
    }
  });

  return total;
}
