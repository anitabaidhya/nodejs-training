var EventEmitter = require('events').EventEmitter;
var util = require ('util');

var Person = function(name){
	this.name = name;
}

util.inherits(Person, EventEmitter);

var anita = new Person("Anita Baidhya");

anita.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});

anita.emit('speak', "You may delay but time will not.");
