var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var DatabaseParser = require('../../src/parsers/databaseParser');

describe('DatabaseParser', function() {
  var parser = null;
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
    parser = new DatabaseParser();
  });

  describe('Parse Database', function() {
    it('should return true when a valid fact is evaluated', function() {
      var database = parser.parse(db);
      expect(database.facts).to.have.lengthOf(12);
      expect(database.rules).to.have.lengthOf(2);
    });
  });
});
