var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var
  Entities = {
    Fact: require('../../src/entities/fact'),
    Rule: require('../../src/entities/rule')
  },
  Parsers = {
    Fact: require('../../src/parsers/fact')
  };

describe('FactParser', function() {
  var parser;

  beforeEach(function() {
    parser = new Parsers.Fact();
  });

  describe('Valid Fact', function() {

    it('should return true when a valid fact is evaluated', function() {
      expect(parser.isValid('varon(juan).')).to.be.true;
      expect(parser.isValid('padre(juan, pepe).')).to.be.true;
    });

    it('should return false when an invalid fact is evaluated', function() {
      expect(parser.isValid('varon(juan.')).to.be.false;
      expect(parser.isValid('varonjuan).')).to.be.false;
      expect(parser.isValid('padre(juan, ).')).to.be.false;
    });
  });

  describe('Parse Fact', function() {

        it('should return a valid Fact when a single argument valid fact is parsed', function() {
            var expectedFact = new Entities.Fact('varon', ['juan']);
            var parsedFact = parser.parse('varon(juan).');
            expect(parsedFact).to.be.eql(expectedFact);
        });
    });
});
