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
    .reduce((highest, value) => Math.max(highest, value))
);
