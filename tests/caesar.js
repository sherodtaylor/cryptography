var caesar = require('../crypt.js').caesar;
var chai = require('chai');

var should = chai.should;
var assert = chai.assert;
var expect = chai.expect;

describe('#encrypt', function() {
  it('should encrypt hi to jk with a shift of 2', function() {
    var encrypted = caesar.encrypt(2, 'hi');
    expect(encrypted).to.equal('jk');
  });

  it('should decrypt jk to hi knowing the shift of 2', function() {
    var encrypted = caesar.encrypt(2, 'hi');
    var decrypted = caesar.decrypt(2, encrypted);
    expect(decrypted).to.equal('hi');
  });
});;