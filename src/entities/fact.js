var Fact = function (name, args) {
	var name = name;
	var args = args;

	this.name = function() {
		return name;
	}

	this.args = function() {
		return args;
	}
}

module.exports = Fact;
