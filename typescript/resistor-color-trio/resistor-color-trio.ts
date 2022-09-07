export function decodedResistorValue([
  firstNumber,
  secondNumber,
  thirdNumber,
]: string[]) {
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

  let resistance: number =
    (colorCode(firstNumber) * 10 + colorCode(secondNumber)) *
    Math.pow(10, colorCode(thirdNumber));

  let ohms: string = "ohms";
  if (resistance >= 1000) {
    ohms = "kiloohms";
    resistance = resistance / 1000;
  }
  return `${resistance} ${ohms}`;
}
