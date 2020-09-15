
(function (window) {
var somGreeter = {};
somGreeter.name = "Som";
var greeting = "Hello ";
somGreeter.sayHello = function () {
	console.log(greeting + somGreeter.name);
}
 
 window.somGreeter = somGreeter;

})(window);

