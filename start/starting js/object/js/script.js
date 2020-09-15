// //object creation
// var company = new Object();
// company.name = "Facebook";
// console.log(company);
// company.ceo = new Object();

// company.ceo.firstName = "mark";
// company.ceo.favColor = "blue"
// console.log(company);

// console.log("Company CEO name is: "
// 	+ company.ceo.firstName + ", fav color is: " + company.ceo.favColor);

// // company["stock of company"] = 110;
// // console.log(company);

// var stockPropName = "stock of company"
// company[stockPropName] = 110;
// console.log(company);




//Object litterals and "this"
// var litteralCircle = {
// 	radius: 10,

// 	 getArea: function() {
// 	 	var self = this;
// 	 	console.log(this);

// 	    var increaseRadius = function() {
// 	    	self.radius = 20;
// 	    };
// 	    increaseRadius();
// 	    console.log(this.radius);

// 	    return Math.PI * Math.pow(this.radius, 2);
// 	 }
// };

// console.log(litteralCircle.getArea());




// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy");
// max.bark();