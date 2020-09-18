const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const newArr = [];

  if (!Array.isArray(members)) return false;

  members.forEach((item) => {
    if (typeof item === 'string') {
      item = item.replace(/\s/g, '');
      item = item.charAt(0).toUpperCase() + item.slice(1);

      newArr.push(item);
    }
  })

  const team = newArr.sort()
    .map((item) => item.slice(0, 1))
    .join('');

  return team;
};
