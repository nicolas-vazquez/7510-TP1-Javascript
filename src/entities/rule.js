var Rule = function(name, args, facts) {
  this.name = name;
  this.args = args;
  this.facts = facts;
}

Rule.prototype.isEqual = function(rule) {
  return this.name == rule.name && JSON.stringify(this.args) == JSON.stringify(rule.args) 
  	&& JSON.stringify(this.facts) == JSON.stringify(rule.facts);
};

module.exports = Rule;
