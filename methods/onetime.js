var exports = module.exports;
var chars = "abcdefghijklmnopqrstuvwxyz".split("");

exports.encrypt = function(key, message) {
  if (key.length < message.length) {
    throw new Error('key too short');
    return;
  }

  var keyArr = key.split('');
  var msgArr = message.replace(/\s/g, '').split('');
  var res = [];

  for(var i = 0, l = msgArr.length; i < l; i++) {
    var shiftIndex = chars.indexOf(msgArr[i]) + chars.indexOf(keyArr[i]) + 1;
    if (shiftIndex >= 26) {
      shiftIndex = shiftIndex - 26;
    }
    res.push(chars[shiftIndex]);
  }
  return res.join('');
};

exports.decrypt = function(key, cipher) {
  if (key.length < cipher.length) {
    throw new Error('key too short');
    return;
  }

  var keyArr = key.split('');
  var cipherArr = cipher.split('');
  var res = [];

  for(var i = 0, l = cipherArr.length; i < l; i++) {
    var shiftIndex = (chars.indexOf(cipherArr[i]) - chars.indexOf(keyArr[i])) - 1;
    if (shiftIndex < 0) {
      shiftIndex = shiftIndex + 26;
    }
    res.push(chars[shiftIndex]);
  }
  return res.join('');
};