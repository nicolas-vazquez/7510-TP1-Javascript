var Fact = require('../entities/fact');
var Rule = require('../entities/rule');
var Database = require('../entities/database');
var FactParser = require('./factParser');
var RuleParser = require('./ruleParser');

var DatabaseParser = function() {
  var facts = [];
  var rules = [];
  var factParser = new FactParser();
  var ruleParser = new RuleParser();

  this.parse = function(database) {
    for (var i = 0; i < database.length; i++) {
      if (factParser.isValid(database[i])) {
        facts.push(factParser.parse(database[i]));
      } else if (ruleParser.isValid(database[i])) {
        rules.push(ruleParser.parse(database[i]));
      } else {
        throw new InvalidDatabaseException();
      }
    }
    return new Database(facts, rules);
  }
}

module.exports = DatabaseParser;
