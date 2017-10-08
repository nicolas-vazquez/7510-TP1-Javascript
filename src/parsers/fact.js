var
	Entities = {
		Fact: require('../entities/fact')
	};

var Fact = function () {

	this.isValid = function (fact) {
		return /^[a-z]+\(([a-z]+, )*[a-z]+\)\.$/.test(fact);
	}

	this.parse = function(fact) {
		var name = fact.split("(")[0];
		var args = fact.split("(")[1].slice(0, -2).split(/[\s,]+/);

		return new Entities.Fact(name, args);
	}
}

module.exports = Fact;
