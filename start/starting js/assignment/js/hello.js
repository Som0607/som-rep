
(function (window) {

var helloGreeter = "Hello ";
var sayHello = function (name) {
	console.log("Hello " + name);
}
 
 window.sayHello = sayHello;

})(window);

