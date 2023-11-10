import { readFileSync } from "fs";

console.log(
  readFileSync("input", { encoding: "utf-8" })
    .split("\n\n")
    .map((lines) =>
      lines
        .split("\n")
        .map(Number)
        .reduce((prev, value) => prev + value)
    )
    .reduce((best, value) => best.concat(value).sort().slice(1), [0, 0, 0])
    .reduce((a, b) => a + b)
);
