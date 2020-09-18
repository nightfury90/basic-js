const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);

  let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator;

  options.repeatTimes === undefined ? repeatTimes = 1 : repeatTimes = options.repeatTimes;

  separator = options.separator || '+';

  options.addition === undefined ? addition = '' : addition = String(options.addition);

  options.additionRepeatTimes === undefined ? additionRepeatTimes = 1 : additionRepeatTimes = options.additionRepeatTimes;

  additionSeparator = options.additionSeparator || '|';

  let result = [];
  let temp = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    temp.push(addition);
  }

  const extraPart = temp.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i++) {
    result.push(str + extraPart);
  }

  return result.join(separator);
};
