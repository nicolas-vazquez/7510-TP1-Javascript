var FactParser = require('./parsers/factParser');
var DatabaseParser = require('./parsers/databaseParser');

var Interpreter = function() {
  var database = null;
  var dbParser = new DatabaseParser();
  var factParser = new FactParser();

  this.parseDB = function(db) {
    database = dbParser.parse(db);
  }

  this.replaceArgs = function(rule, query) {
    for (var i = 0; i < query.args.length; i++) {
      var oldArg = rule.args[i];
      var newArg = query.args[i];
      rule.args[i] = newArg;
      for (var j = 0; j < rule.facts.length; j++) {
        for (var k = 0; k < rule.facts[j].args.length; k++) {
          if (rule.facts[j].args[k] == oldArg) {
            rule.facts[j].args[k] = newArg;
          }
        }
      }
    }
  }

  this.evaluateRules = function(query) {
    var rule = database.findRule(query);
    if (!rule) {
      return false;
    }
    this.replaceArgs(rule, query);

    for (var i = 0; i < rule.facts.length; i++) {
      if (!database.includesFact(rule.facts[i])) {
        return false;
      }
    }

    return true;
  }

  this.checkQuery = function(query) {
    if (!factParser.isValid(query)) {
      throw new InvalidQueryException();
    } else {
      query = factParser.parse(query);
    }
    
    if (database.includesFact(query)) {
      return true;
    } else {
      return this.evaluateRules(query);
    }
  }
}

module.exports = Interpreter;
