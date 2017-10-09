var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var RuleParser = require('../../src/parsers/ruleParser');

describe('RuleParser', function() {
  var parser = null;
  var validRule = 'hijo(X, Y) :- varon(X), padre(Y, X).'

  beforeEach(function() {
    parser = new RuleParser();
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
