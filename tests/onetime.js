var onetime = require('../crypt.js').onetime;
var chai = require('chai');

var should = chai.should();
var assert = chai.assert;
var expect = chai.expect;

describe('#onetime', function() {
  it('should encrypted it correctly with the pad sanfran', function() {
    var encrypted = onetime.encrypt('sanfran', 'london');
    expect(encrypted).to.equal('epbjgo');
  });

  it('should decrypt decrypt the cipher with pad', function() {
    var encrypted = onetime.encrypt('sanfran', 'london');
    var decrypt = onetime.decrypt('sanfran', encrypted)
    expect(decrypt).to.equal('london');
  });

  it('should throw error if key is too short', function() {
    expect(function(){ 
      onetime.encrypt('sn', 'sdfadsfa');
    }).to.throw(Error);

    expect(function(){ 
      onetime.decrypt('sn', 'sdfadsfa');
    }).to.throw(Error);
  });
});