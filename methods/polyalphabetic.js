var exports = module.exports;
var chars = "abcdefghijklmnopqrstuvwxyz".split("");

exports.encrypt = function(key, message) {
  var keyArr = key.replace(' ', '').split('');
  var msgArr = message.replace(' ', '').split('');
  var res = [];

  for(var i = 0, l = msgArr.length; i < l; i++) {
    var shiftIndex = chars.indexOf(keyArr[i % keyArr.length]);
    res.push(chars[i + shiftIndex]);
  }

  return res.join('');
};