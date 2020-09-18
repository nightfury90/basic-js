const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((item) => item == '^^' ? result++ : result);
  }

  return result;
};
