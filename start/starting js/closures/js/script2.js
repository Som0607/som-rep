(function (window) {
var samGreeter = {};
samGreeter.name = "Sam";
var greeting = "Hi ";
samGreeter.sayHi = function () {
	console.log(greeting + samGreeter.name);
}

 window.samGreeter = samGreeter;

})(window);