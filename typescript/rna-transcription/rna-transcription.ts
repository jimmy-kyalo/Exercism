export function toRna(strand: string) {
  const dnaMap = new Map([
    ["C", "G"],
    ["G", "C"],
    ["T", "A"],
    ["A", "U"],
  ]);

  return strand.split("").reduce((acc, curr) => {
    if (!dnaMap.has(curr)) throw new Error("Invalid input DNA.");
    acc += dnaMap.get(curr) || "";
    return acc;
  }, "");
}
