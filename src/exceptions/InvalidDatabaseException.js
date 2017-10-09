var InvalidDatabaseException = function() {
	this.message = 'The database introduced has malformations.';
	this.name = 'InvalidDatabaseException';

	this.toString = function() {
		return this.message;
	}
}

module.exports = InvalidDatabaseException;
