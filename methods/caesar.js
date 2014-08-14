var exports = module.exports;
var chars = "abcdefghijklmnopqrstuvwxyz".split("");

exports.encrypt = function(shift, message) {
  var splitMsg = message.split('');
  var arr = [];

  if (shift > 25 || shift < 1) {
    throw new Error('shift should be between 1 & 25');
    return;
  }

  for(var i = 0, l = splitMsg.length; i < l; i++) {
    var shifted = chars.indexOf(splitMsg[i].toLowerCase()) + 2;
    var charI;

    if (shifted > 26) {
      shifted = (chars.indexOf(splitMsg[i].toLowerCase()) - 26) + shifted;
    }
    arr.push(chars[shifted]);
  }

  return arr.join('');
};

exports.decrypt = function(shift, cipher) {
  var cipherArr = cipher.split('');
  var arr = [];

  if (shift > 25 || shift < 1) {
    throw new Error('shift should be between 1 & 25');
    return;
  }

  for(var i = 0, l = cipherArr.length; i < l; i++) {
    var shifted = chars.indexOf(cipherArr[i].toLowerCase()) - 2;
    var charI;

    if (shifted < 0) {
      shifted = (26 - chars.indexOf(cipherArr[i].toLowerCase())) + 2;
    }
    arr.push(chars[shifted]);
  }

  return arr.join('');
};