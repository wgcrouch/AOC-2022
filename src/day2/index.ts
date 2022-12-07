import { input } from "./input";

enum Move {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors"
}

const strategyMapping = {
  A: Move.Rock,
  B: Move.Paper,
  C: Move.Scissors,
  X: Move.Rock,
  Y: Move.Paper,
  Z: Move.Scissors
};

const points = {
  [Move.Rock]: 1,
  [Move.Paper]: 2,
  [Move.Scissors]: 3
};

const Win = 6;
const Draw = 3;
const Loss = 0;

function gameResult(theirs: Move, ours: Move): number {
  if (theirs === Move.Rock) {
    if (ours === Move.Paper) {
      return Win;
    } else if (ours === Move.Scissors) {
      return Loss;
    }
    return Draw;
  } else if (theirs === Move.Scissors) {
    if (ours === Move.Paper) {
      return Loss;
    } else if (ours === Move.Rock) {
      return Win;
    }
    return Draw;
  }

  if (ours === Move.Paper) {
    return Draw;
  } else if (ours === Move.Scissors) {
    return Win;
  }
  return Loss;
}

function requiredMove(
  theirs: Move,
  result: typeof Win | typeof Loss | typeof Draw
): Move {
  if (theirs === Move.Rock) {
    if (result === Win) {
      return Move.Paper;
    } else if (result === Loss) {
      return Move.Scissors;
    }
    return Move.Rock;
  } else if (theirs === Move.Scissors) {
    if (result === Win) {
      return Move.Rock;
    } else if (result === Loss) {
      return Move.Paper;
    }
    return Move.Scissors;
  }

  if (result === Win) {
    return Move.Scissors;
  } else if (result === Loss) {
    return Move.Rock;
  }
  return Move.Paper;
}

const resultMapping = {
  X: Loss,
  Y: Draw,
  Z: Win
} as const;

const moves = input.split("\n").map((line) => line.split(" "));

export const day2Part1 = () => {
  const turnPoints = moves.map(([theirs, ours]) => {
    const theirMove = strategyMapping[theirs as "A" | "B" | "C"];
    const ourMove = strategyMapping[ours as "X" | "Y" | "Z"];

    const ourMovePoints = points[ourMove];
    const gameResultPoints = gameResult(theirMove, ourMove);

    return ourMovePoints + gameResultPoints;
  });

  return turnPoints.reduce((o, i) => o + i, 0);
};

export const day2Part2 = () => {
  const turnPoints = moves.map(([theirs, ours]) => {
    const theirMove = strategyMapping[theirs as "A" | "B" | "C"];
    const requiredResult = resultMapping[ours as "X" | "Y" | "Z"];
    const ourMove = requiredMove(theirMove, requiredResult);

    const ourMovePoints = points[ourMove];

    return ourMovePoints + requiredResult;
  });

  return turnPoints.reduce((o, i) => o + i, 0);
};
