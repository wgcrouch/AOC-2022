import { input } from "./input";
import { chunk } from "lodash";

// const input = `    [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2`;

export function day5Part1() {
  const lines = input.split("\n");

  const breakPoint = lines.findIndex((line) => line === "");

  const stackLines = lines
    .slice(0, breakPoint - 1)
    .map((line) =>
      chunk(line.split(""), 4).map((chunk) =>
        chunk.join("").replace("[", "").replace("]", "").trim()
      )
    );

  const stacks: Array<Array<string>> = [];

  stackLines.forEach((line) => {
    line.forEach((crate, i) => {
      if (crate) {
        stacks[i] = stacks[i] ?? [];
        stacks[i].unshift(crate);
      }
    });
  });

  const moves = lines.slice(breakPoint + 1);
  moves.forEach((move) => {
    const [count, from, to] = /move (\d+) from (\d+) to (\d+)/
      .exec(move)!
      .slice(1)
      .map(Number);

    for (let i = 0; i < +count; i++) {
      const fromStack = stacks[from - 1];
      const toStack = stacks[to - 1];
      toStack.push(fromStack.pop()!);
    }
  });

  return stacks.map((parts) => parts[parts.length - 1]).join("");
}

export function day5Part2() {
  const lines = input.split("\n");

  const breakPoint = lines.findIndex((line) => line === "");

  const stackLines = lines
    .slice(0, breakPoint - 1)
    .map((line) =>
      chunk(line.split(""), 4).map((chunk) =>
        chunk.join("").replace("[", "").replace("]", "").trim()
      )
    );

  const stacks: Array<Array<string>> = [];

  stackLines.forEach((line) => {
    line.forEach((crate, i) => {
      if (crate) {
        stacks[i] = stacks[i] ?? [];
        stacks[i].unshift(crate);
      }
    });
  });

  const moves = lines.slice(breakPoint + 1);
  moves.forEach((move) => {
    const [count, from, to] = /move (\d+) from (\d+) to (\d+)/
      .exec(move)!
      .slice(1)
      .map(Number);

    const fromStack = stacks[from - 1];

    const moving = fromStack.slice(-count);
    fromStack.splice(fromStack.length - count, count);

    stacks[to - 1] = stacks[to - 1].concat(moving);
  });

  return stacks.map((parts) => parts[parts.length - 1]).join("");
}
