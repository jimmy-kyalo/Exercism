export function age(planet: string, seconds: number) {
  const oneEarthYear: number = 31557600;

  switch (planet) {
    case "earth":
      let earthYears = seconds / oneEarthYear;
      return Number(earthYears.toFixed(2));
    case "mercury":
      let mercuryYears = seconds / (oneEarthYear * 0.2408467);
      return Number(mercuryYears.toFixed(2));
    case "venus":
      let venusYears = seconds / (oneEarthYear * 0.61519726);
      return Number(venusYears.toFixed(2));
    case "mars":
      let marsYears = seconds / (oneEarthYear * 1.8808158);
      return Number(marsYears.toFixed(2));
    case "jupiter":
      let jupiterYears = seconds / (oneEarthYear * 11.862615);
      return Number(jupiterYears.toFixed(2));
    case "saturn":
      let saturnYears = seconds / (oneEarthYear * 29.447498);
      return Number(saturnYears.toFixed(2));
    case "uranus":
      let uranusYears = seconds / (oneEarthYear * 84.016846);
      return Number(uranusYears.toFixed(2));
    case "neptune":
      let neptuneYears = seconds / (oneEarthYear * 164.79132);
      return Number(neptuneYears.toFixed(2));

    default:
      break;
  }
}
