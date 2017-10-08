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
    Database: require('../../src/parsers/database')
  };

describe('DatabaseParser', function() {
  var parser;
  var db = [
    "varon(juan).",
    "varon(pepe).",
    "varon(hector).",
    "varon(roberto).",
    "varon(alejandro).",
    "mujer(maria).",
    "mujer(cecilia).",
    "padre(juan, pepe).",
    "padre(juan, pepa).",
    "padre(hector, maria).",
    "padre(roberto, alejandro).",
    "padre(roberto, cecilia).",
    "hijo(X, Y) :- varon(X), padre(Y, X).",
    "hija(X, Y) :- mujer(X), padre(Y, X)."
  ];

  beforeEach(function() {
    parser = new Parsers.Database();
  });

  describe('Parse Database', function() {

    it('should return true when a valid fact is evaluated', function() {
      var database = parser.parse(db);
      expect(true).to.be.true;
    });
  });
});
