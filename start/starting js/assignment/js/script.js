(function (){
var names = ["Som", "John", "Joe", "Jason", "Paul", "Frank", "Larry"];

for (i = 0; i < names.length; i++) {
	var firstLetter = names[i].charAt(0);

	if (firstLetter === 'J') {
		saygoodBye(names[i]);
	}
	else {
		sayHello(names[i]);
	}
}
})();