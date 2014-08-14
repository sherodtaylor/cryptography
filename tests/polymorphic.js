var polyalphabetic = require('../crypt.js').polyalphabetic;
var chai = require('chai');

var should = chai.should;
var assert = chai.assert;
var expect = chai.expect;

describe('#encrypt', function() {
  it('should encrypt hi to jk with a shift of 2', function() {
    var encrypted = polyalphabetic.encrypt('dogs', 'I really like elephants');
    expect(encrypted).to.equal('mgltpafemzlxptwaecal');
  });

  it('should decrypt jk to hi knowing the shift of 2', function() {
    var encrypted = polyalphabetic.encrypt('dogs', 'I really like elephants');
    var decrypted = polyalphabetic.decrypt('dogs', encrypted);
    expect(decrypted).to.equal('Ireallylikeelephants');
  });
});;