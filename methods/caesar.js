var exports = module.exports;
var chars = "abcdefghijklmnopqrstuvwxyz".split("");

exports.encrypt = function(shift, message) {
  var splitMsg = message.split('');
  var arr = [];

  if (shift > 25 && shift < 1) {
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

exports.decrypt = function(shift, message) {
  var splitMsg = message.split('');
  var arr = [];

  if (shift > 25 && shift < 1) {
    throw new Error('shift should be between 1 & 25');
    return;
  }

  for(var i = 0, l = splitMsg.length; i < l; i++) {
    var shifted = chars.indexOf(splitMsg[i].toLowerCase()) - 2;
    var charI;

    if (shifted < 0) {
      shifted = (26 - chars.indexOf(splitMsg[i].toLowerCase())) + 2;
    }
    arr.push(chars[shifted]);
  }

  return arr.join('');
};
// exports.decrypt = function(shift, message) {
//   var splitMsg = message.split('');
//   var arr = [];
//   for(var i = 0, l = splitMsg.length; i < l; i++) {
//     arr.push(String.fromCharCode(splitMsg[i].charCodeAt() - shift));
//   }
//   return arr.join('');
// };