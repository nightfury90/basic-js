const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error();

  const dateArr = date.toString().split(' ');

  if (dateArr[1] == 'Jan' || dateArr[1] == 'Feb' || dateArr[1] == 'Dec') {
    return 'winter';
  }

  if (dateArr[1] == 'Mar' || dateArr[1] == 'Apr' || dateArr[1] == 'May') {
    return 'spring';
  }

  if (dateArr[1] == 'Jun' || dateArr[1] == 'Jul' || dateArr[1] == 'Aug') {
    return 'summer';
  }

  if (dateArr[1] == 'Sep' || dateArr[1] == 'Oct' || dateArr[1] == 'Nov') {
    return 'autumn';
  }
};
