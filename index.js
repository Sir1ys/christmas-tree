function createChristmasTree(height) {
  let array = [];

  for (let i = height; i >= 0; i--) {
    let str;

    switch (i) {
      case 0:
        str = "|";
        break;
      case 1:
        str = "x";
        break;
      default:
        str = "x".repeat(i * 2 - 1);
    }

    if (i !== 0) array.unshift(str);
    else array.push(str);
  }
  let maxLength = Math.max(...array.map((line) => line.length));
  
  let centeredText = array
    .map((line) => {
      let spacesToAdd = Math.floor((maxLength - line.length) / 2);
      return " ".repeat(spacesToAdd) + line + " ".repeat(spacesToAdd);
    })
    .join("\n");

  const result = array.join("\n");

  return centeredText;
}

module.exports = createChristmasTree;
