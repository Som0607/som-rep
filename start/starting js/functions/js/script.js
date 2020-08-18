//functions are first class datatypes 
//functions are objects
function multiply(x, y) {
	return x * y;
}
console.log(multiply(6, 8));

multiply.version = "v.1.0.0"
console.log(multiply.version);