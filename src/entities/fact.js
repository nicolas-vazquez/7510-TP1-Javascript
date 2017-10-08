var Fact = function(name, args) {
  this.name = name;
  this.args = args;
}

Fact.prototype.isEqual = function(fact) {
  return this.name == fact.name && JSON.stringify(this.args) == JSON.stringify(fact.args);
};

module.exports = Fact;
