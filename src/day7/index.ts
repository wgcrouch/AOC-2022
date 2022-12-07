import { input } from "./input";

type File = {
  id: string;
  size: number;
};

type Dir = {
  id: string;
  dirs: Array<Dir>;
  files: Array<File>;
  size?: number;
  parent?: Dir;
};

export function day7Part1() {
  let stack: Array<Dir> = [];

  const root: Dir = {
    id: "/",
    dirs: [],
    files: [],
    parent: undefined,
    size: 0
  };

  const commands = input.split("$ ").map((lines) => lines.split("\n"));

  const currentDir = () => stack[stack.length - 1];

  const getOrAddDir = (id: string): Dir => {
    const current = currentDir();
    const existing = current.dirs.find((child) => child.id === id);
    if (existing) {
      return existing;
    }
    const newDir: Dir = {
      id,
      dirs: [],
      files: [],
      parent: current,
      size: 0
    };

    current.dirs.push(newDir);
    return newDir;
  };

  const getOrAddFile = (id: string, size: number): File => {
    const current = currentDir();
    const existing = current.files.find((child) => child.id === id);
    if (existing) {
      return existing;
    }
    const newFile: File = {
      id,
      size
    };

    current.files.push(newFile);

    current.size = current.size ? current.size + size : size;
    let p: Dir | undefined = current.parent;
    while (p) {
      p.size = p.size ? p.size + size : size;
      p = p.parent;
    }

    return newFile;
  };

  for (let [command, ...output] of commands) {
    if (command) {
      if (command.startsWith("cd ")) {
        const path = command.split(" ")[1];
        if (path === "..") {
          stack.pop();
        } else if (path === "/") {
          stack = [root];
        } else {
          const dir = getOrAddDir(path);
          stack.push(dir);
        }
      } else if (command === "ls") {
        for (let item of output) {
          const [typeOrSize, name] = item.split(" ");

          if (typeOrSize === "dir") {
            getOrAddDir(name);
          } else if (typeOrSize) {
            getOrAddFile(name, Number(typeOrSize));
          }
        }
      }
    }
  }

  // Walk the tree to find small dirs
  const smallDirs = [];
  let s = [root];

  while (s.length) {
    const current = s.pop();
    if (!current) {
      break;
    }
    if ((current.size ?? Infinity) <= 100000) {
      smallDirs.push(current);
    }
    s.push(...(current?.dirs ?? []));
  }
  return smallDirs.reduce((o, d) => o + (d.size ?? 0), 0);
}

export function day7Part2() {
  let stack: Array<Dir> = [];

  const root: Dir = {
    id: "/",
    dirs: [],
    files: [],
    parent: undefined,
    size: 0
  };

  const commands = input.split("$ ").map((lines) => lines.split("\n"));

  const currentDir = () => stack[stack.length - 1];

  const getOrAddDir = (id: string): Dir => {
    const current = currentDir();
    const existing = current.dirs.find((child) => child.id === id);
    if (existing) {
      return existing;
    }
    const newDir: Dir = {
      id,
      dirs: [],
      files: [],
      parent: current,
      size: 0
    };

    current.dirs.push(newDir);
    return newDir;
  };

  const getOrAddFile = (id: string, size: number): File => {
    const current = currentDir();
    const existing = current.files.find((child) => child.id === id);
    if (existing) {
      return existing;
    }
    const newFile: File = {
      id,
      size
    };

    current.files.push(newFile);

    current.size = current.size ? current.size + size : size;
    let p: Dir | undefined = current.parent;
    while (p) {
      p.size = p.size ? p.size + size : size;
      p = p.parent;
    }

    return newFile;
  };

  for (let [command, ...output] of commands) {
    if (command) {
      if (command.startsWith("cd ")) {
        const path = command.split(" ")[1];
        if (path === "..") {
          stack.pop();
        } else if (path === "/") {
          stack = [root];
        } else {
          const dir = getOrAddDir(path);
          stack.push(dir);
        }
      } else if (command === "ls") {
        for (let item of output) {
          const [typeOrSize, name] = item.split(" ");

          if (typeOrSize === "dir") {
            getOrAddDir(name);
          } else if (typeOrSize) {
            getOrAddFile(name, Number(typeOrSize));
          }
        }
      }
    }
  }

  const freeSpace = 70000000 - root.size!;
  const sizeToDelete = 30000000 - freeSpace;
  console.log(sizeToDelete);

  // Walk the tree to find small dirs
  const bigDirs = [];
  let s = [root];

  while (s.length) {
    const current = s.pop();
    if (!current) {
      break;
    }
    if (current.size! >= sizeToDelete) {
      bigDirs.push(current);
    }
    s.push(...(current?.dirs ?? []));
  }
  console.log(bigDirs);

  return Math.min(...bigDirs.map((d) => d.size!));
}
