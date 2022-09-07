export function isPangram(str: string): boolean {
  const letters = str.toLowerCase().replace(/[^a-z]/g, "");
  return str.length === 0 ? false : new Set(letters).size === 26;
}
