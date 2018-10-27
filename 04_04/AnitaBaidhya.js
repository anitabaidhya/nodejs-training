/*path of the person.js*/
var Person = require("./lib/Person");


var ben = new Person("Ben Franklin");
var anita = new Person("anita Baidhya");


anita.on('speak', function(said) {

	console.log(`${this.name} -> ${said}`);

});

ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


ben.emit('speak', "You may delay, but time will not.");
anita.emit('speak', "It is far better to be alone, than to be in bad company.");
