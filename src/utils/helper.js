export function evaluate(equation) {
  if (/-|\/|\+|x/.test(equation)) {
    if (equation.startsWith("-")) equation = "0" + equation;
    let splitedEquation = equation
      .replaceAll("+-", "-")
      .replaceAll("-+", "-")
      .replaceAll("--", "+")
      .replaceAll("++", "+")
      .replaceAll("x+", "x")
      .replaceAll("/+", "/")
      .replaceAll("+", " + ")
      .replaceAll("-", " - ")
      .replaceAll("x", " x ")
      .replaceAll("/", " / ")
      .split(" ");
    while (splitedEquation.indexOf("") !== -1)
      splitedEquation.splice(splitedEquation.indexOf(""), 1);
    for (let i = 0; i < splitedEquation.length; i++) {
      if (
        (splitedEquation[i] === "x") | (splitedEquation[i] === "/") &&
        splitedEquation[i + 1] === "-"
      ) {
        splitedEquation.splice(i + 1, 1);
        splitedEquation[i - 1] = (-parseFloat(
          splitedEquation[i - 1]
        )).toString();
      }
    }
    for (let i = 1; i < splitedEquation.length; i = i + 2) {
      if (splitedEquation[i] === "x")
        splitedEquation.splice(
          i - 1,
          3,
          parseFloat(splitedEquation[i - 1]) *
            parseFloat(splitedEquation[i + 1])
        );
      if (splitedEquation[i] === "/")
        splitedEquation.splice(
          i - 1,
          3,
          parseFloat(splitedEquation[i - 1]) /
            parseFloat(splitedEquation[i + 1])
        );
    }
    let operation;
    do {
      operation = splitedEquation[1];
      if (operation === "+")
        splitedEquation.splice(
          0,
          3,
          parseFloat(splitedEquation[0]) + parseFloat(splitedEquation[2])
        );
      else if (operation === "-")
        splitedEquation.splice(
          0,
          3,
          parseFloat(splitedEquation[0]) - parseFloat(splitedEquation[2])
        );
    } while (operation === "+" || operation === "-");
    if (splitedEquation[0] > 9007199254740991)
      return splitedEquation[0].toPrecision(6).replace("e+", "e");
    if (splitedEquation[0] < -9007199254740991)
      return splitedEquation[0].toPrecision(6).replace("e+", "e");
    return parseFloat(splitedEquation[0].toFixed(6)).toString();
  } else {
    return equation;
  }
}

export function formulateInput(input) {
  if (/nan|infinity|-infinity/i.test(input)) return input;
  const splitedInput = input
    .replaceAll("+", " + ")
    .replaceAll("-", " - ")
    .replaceAll("x", " x ")
    .replaceAll("/", " / ")
    .split(" ");
  for (let i = 0; i < splitedInput.length; i = i + 2) {
    if (splitedInput[i].split(".").length === 1) {
      const arr = splitedInput[i].split("");
      for (let j = arr.length - 3; j > 0; j = j - 3) arr.splice(j, 0, ",");
      splitedInput[i] = arr.join("");
    } else {
      const arr = splitedInput[i].split(".")[0].split("");
      for (let j = arr.length - 3; j > 0; j = j - 3) arr.splice(j, 0, ",");
      splitedInput[i] = arr.join("") + "." + splitedInput[i].split(".")[1];
    }
  }
  return splitedInput.join("");
}
