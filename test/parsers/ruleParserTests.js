var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Fact = require('../../src/entities/fact');
var Rule = require('../../src/entities/rule');
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

  describe('Parse Rule', function() {
    it('should return a valid Rule entity when a valid raw rule is parsed', function() {
      expect(parser.parse(validRule)).to.eql(new Rule('hijo', ['X', 'Y'], [(new Fact('varon', ['X'])), (new Fact('padre', ['Y', 'X']))]));
    });
  });
});
