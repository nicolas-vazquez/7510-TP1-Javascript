var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var
  Entities = {
    Fact: require('../../src/entities/fact'),
    Rule: require('../../src/entities/rule')
  },
  Parsers = {
    Fact: require('../../src/parsers/fact'),
    Rule: require('../../src/parsers/rule')
  };

describe('RuleParser', function() {
  var parser;
  var validRule = 'hijo(X, Y) :- varon(X), padre(Y, X).'

  beforeEach(function() {
    parser = new Parsers.Rule();
  });

  describe('Valid Rule', function() {
    it('should return true when a valid rule is evaluated', function() {
      expect(parser.isValid(validRule)).to.be.true;
    });

    it('should return false when an invalid rule is evaluated', function() {
      expect(parser.isValid('hijo(X, Y :- varon(X), padre(Y, X).')).to.be.false;
      expect(parser.isValid('hijo(X, Y) : varon(X), padre(Y, X).')).to.be.false;
    });
  });
});
