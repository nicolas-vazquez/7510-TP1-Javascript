var
  Entities = {
    Rule: require('../entities/rule')
  },
  Parsers = {
    Fact: require('./fact')
  };

var Rule = function() {

  this.isValid = function(rule) {
    return /^[a-z]+\(([A-Z]+, )*[A-Z]+\) :- (([a-z]+\(([A-Z]+, )*[A-Z]+\)), )*([a-z]+\(([A-Z]+, )*[A-Z]+\))/.test(rule);
  }

  this.parse = function(rule) {
    var name = rule.split("(")[0];
    var args = rule.split("(")[1].split(")")[0].split(/[\s,]+/);
    var rawFacts = rule.split(":-")[1].replace(/\s/g,'').replace(",", ";").split(";");
    var facts = [];
    var parser = new Parsers.Fact();

    for (var i = 0; i < rawFacts.length; i++) {
      facts.push(parser.parse(rawFacts[i]));
    }
    
    return new Entities.Rule(name, args, facts);
  }

}

module.exports = Rule;
