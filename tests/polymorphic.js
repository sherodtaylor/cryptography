var polyalphabetic = require('../crypt.js').polyalphabetic;
var chai = require('chai');

var should = chai.should;
var assert = chai.assert;
var expect = chai.expect;

describe('#polyalphabetic', function() {
  it('should encrypt using the key dogs', function() {
    var encrypted = polyalphabetic.encrypt('dogs', 'I really like elephants');
    expect(encrypted).to.equal('mgltpafemzlxptwaecal');
  });

  it('should decrypt cipher using dogs as the key', function() {
    var encrypted = polyalphabetic.encrypt('dogs', 'I really like elephants');
    var decrypted = polyalphabetic.decrypt('dogs', encrypted);
    expect(decrypted).to.equal('ireallylikeelephants');
  });
});