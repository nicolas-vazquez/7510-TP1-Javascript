var Rule = function (name, args, facts) {
	var name = name;
	var args = args;
	var facts = facts;

	this.name = function() {
		return name;
	}

	this.args = function() {
		return args;
	}

	this.facts = function() {
		return facts;
	}
}

module.exports = Rule;
