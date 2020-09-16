
(function (window) {

var goodByeGreeter = "Good Bye ";
var saygoodBye = function (name) {
	console.log("Good Bye " + name);
}
 
 window.saygoodBye = saygoodBye;

})(window);