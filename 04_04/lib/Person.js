var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

/*module.exports is javascript object that is returned by require statement
--module.exports is an object that is consumable by another javascript file
*/
module.exports = Person;