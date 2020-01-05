/* 
function sayHi(name){
	console.log("hi " + name);
}
sayHi("ashwini")

// Anonymous function 
*/
var sayHi=function(name){
	console.log("Hi " + name);
}
/*
sayHi("ashwini")
*/
function callHi(func, name){
	func(name);
}
callHi(sayHi, "ashwini")
