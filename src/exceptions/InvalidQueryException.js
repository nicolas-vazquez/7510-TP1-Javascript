var InvalidQueryException = function() {
  this.message = 'The query introduced has malformations.';
  this.name = 'InvalidQueryException';

  this.toString = function() {
    return this.message;
  }
}

module.exports = InvalidQueryException;
