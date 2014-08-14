var exports = module.exports;
var chars = "abcdefghijklmnopqrstuvwxyz".split("");

exports.encrypt = function(key, message) {
  var keyArr = key.replace(/\s/g, '').split('');
  var msgArr = message.replace(/\s/g, '').split('');
  var res = [];

  for(var i = 0, l = msgArr.length; i < l; i++) {
    var shiftIndex = chars.indexOf(keyArr[i % keyArr.length]) + chars.indexOf(msgArr[i].toLowerCase()) + 1;
    if (shiftIndex >= 26) {
      shiftIndex = (shiftIndex - 26);
    }

    res.push(chars[shiftIndex]);
  }

  return res.join('');
};

exports.decrypt = function(key, cipher) {
  var keyArr = key.replace(/\s/g, '').split('')
  var cipherArr = cipher.split('');
  var res = [];

  for(var i = 0, l = cipherArr.length; i < l; i++) {
    var shiftIndex = chars.indexOf(cipherArr[i].toLowerCase()) - chars.indexOf(keyArr[i % keyArr.length]) - 1;
    if (shiftIndex < 0) {
      shiftIndex = (shiftIndex + 26);
    }

    res.push(chars[shiftIndex]);
  }

  return res.join('');
}