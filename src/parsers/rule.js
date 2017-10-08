var
	Entities = {
		Rule: require('../entities/rule')
	},
	Parsers = {
		Fact: require('./fact')
	};

var Rule = function () {

	this.isValid = function (rule) {
		return /^[a-z]+\(([A-Z]+, )*[A-Z]+\) :- (([a-z]+\(([A-Z]+, )*[A-Z]+\)), )*([a-z]+\(([A-Z]+, )*[A-Z]+\))/.test(rule);
	}

	this.parse = function(rule) {
		var name = rule.split("(")[0];
		var args = rule.split("(")[1].split(")")[0].split(/[\s,]+/);
		var facts = rule.split(":-")[1];
		
		for (var i = 0; i < facts.length; i++) {
			facts[i] = Parsers.Fact(facts[i]);
		}

		return new Entities.Rule(name, args, facts);
	}
	
}

module.exports = Rule;
