var
  Entities = {
    Fact: require('../entities/fact'),
    Rule: require('../entities/rule'),
    Database: require('../entities/database')
  },
  Parsers = {
    Fact: require('./fact'),
    Rule: require('./rule')
  };

var Database = function() {
  var facts = [];
  var rules = [];
  var factParser = new Parsers.Fact();
  var ruleParser = new Parsers.Rule();

  this.parse = function(database) {
    for (var i = 0; i < database.length; i++) {
      if (/^[a-z]+\(([a-z]+, )*[a-z]+\)\.$/.test(database[i])) {
        facts.push(factParser.parse(database[i]));
      } else if (/^[a-z]+\(([A-Z]+, )*[A-Z]+\) :- (([a-z]+\(([A-Z]+, )*[A-Z]+\)), )*([a-z]+\(([A-Z]+, )*[A-Z]+\))/.test(database[i])) {
        rules.push(ruleParser.parse(database[i]));
      }
    }
    return new Entities.Database(facts, rules);
  }
}

module.exports = Database;
