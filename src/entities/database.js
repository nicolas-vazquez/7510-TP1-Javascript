var Database = function(facts, rules) {
  this.facts = facts;
  this.rules = rules;
}

Database.prototype.includesFact = function(fact) {
  for (var i = 0; i < this.facts.length; i++) {
    if (this.facts[i].isEqual(fact)) {
      return true;
    }
  }
  return false;
};

Database.prototype.findRule = function(rule) {
  for (var i = 0; i < this.rules.length; i++) {
    if (this.rules[i].name == rule.name) {
      return this.rules[i];
    }
  }
};

module.exports = Database;
