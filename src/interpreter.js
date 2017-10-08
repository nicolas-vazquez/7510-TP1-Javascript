var
  Parsers = {
    Fact: require('./parsers/fact'),
    Database: require('./parsers/database')
  };

var Interpreter = function() {
  this.database = {};
  var dbParser = new Parsers.Database();
  var factParser = new Parsers.Fact();

  this.parseDB = function(database) {
    this.database = dbParser.parse(database);
  }

  this.checkQuery = function(query) {
    if (!factParser.isValid(query)) {

    } else {
      query = factParser.parse(query);
    }
    
    for (var i = 0; i < this.database.facts.length; i++) {
      if (this.database.facts[i].isEqual(query)) {
        return true;
      }
    }
    //Check Rules

    return false;
  }
}

module.exports = Interpreter;
