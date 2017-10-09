var Fact = require('../entities/fact');

var FactParser = function() {

  this.isValid = function(fact) {
    return /^[a-z]+\(([a-z]+, )*[a-z]+\)/.test(fact);
  }

  this.parse = function(fact) {
    var name = fact.split("(")[0];
    var args = fact.split("(")[1].replace(/\./g, '').slice(0, -1).split(/[\s,]+/);

    return new Fact(name, args);
  }
}

module.exports = FactParser;
