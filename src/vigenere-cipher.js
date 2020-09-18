const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean = true) {
    this.boolean = boolean;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error('Correct parameters are needed!');

    str = str.toUpperCase();
    key = key.toUpperCase();

    let result = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      result.push(code);

      if (code >= 65 && code <= 90) {
        result[i] += key.charCodeAt((i - count) % key.length) - 65;
        if (result[i] > 90) result[i] -= 26;
      }
      else count++;
    }

    if (this.boolean) {
      return String.fromCharCode(...result);
    } else {
      return String.fromCharCode(...result.reverse());
    }
  }


  decrypt(str, key) {
    if (!(str && key)) throw new Error('Correct parameters are needed!');

    str = str.toUpperCase();
    key = key.toUpperCase();

    let result = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      result.push(code);

      if (code >= 65 && code <= 90) {
        result[i] -= key.charCodeAt((i - count) % key.length) - 65;
        if (result[i] < 65) result[i] += 26;
      }
      else count++;
    }

    if (this.boolean) {
      return String.fromCharCode(...result);
    }
    else {
      return String.fromCharCode(...result.reverse());
    }
  }
}

module.exports = VigenereCipheringMachine;
