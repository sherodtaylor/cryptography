var exports = module.exports;
var caesar = require('./methods/caesar.js')
var polyalphabetic = require('./methods/polyalphabetic.js')
var onetime = require('./methods/onetime.js')

exports.caesar = caesar;
exports.polyalphabetic = polyalphabetic;
exports.onetime = onetime;