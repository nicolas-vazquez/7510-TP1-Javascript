var Rule = require('../entities/rule');
var FactParser = require('./factParser');

var RuleParser = function() {

  this.isValid = function(rule) {
    return /^[a-z]+\(([A-Z]+, )*[A-Z]+\) :- (([a-z]+\(([A-Z]+, )*[A-Z]+\)), )*([a-z]+\(([A-Z]+, )*[A-Z]+\))/.test(rule);
  }

  this.parse = function(rule) {
    var facts = [];
    var parser = new FactParser();
    var name = rule.split("(")[0];
    var args = rule.split("(")[1].split(")")[0].split(/[\s,]+/);
    var rawFacts = rule.split(":-")[1].replace(/\s/g, '').replace(",", ";").split(";");

    for (var i = 0; i < rawFacts.length; i++) {
      facts.push(parser.parse(rawFacts[i]));
    }

    return new Rule(name, args, facts);
  }
}

module.exports = RuleParser;
