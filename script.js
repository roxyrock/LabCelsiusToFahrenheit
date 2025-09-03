function convertCtoF(tempCelsius) {
  let tempFahrenheit = tempCelsius * (9 / 5) + 32;
  return tempFahrenheit;
}

let tempCelsius = 30;
console.log(convertCtoF(tempCelsius));
