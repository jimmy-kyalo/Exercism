export function decodedValue([firstNumber, secondNumber]: string[]): number {
  const colors = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];

  const colorCode = (color: string): number => colors.indexOf(color);
  return colorCode(firstNumber) * 10 + colorCode(secondNumber);
}
