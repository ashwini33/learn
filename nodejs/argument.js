/*
function sayHi(name){
	console.log("Hi " + name);

}
*/
function callHi(func,name){
	func(name);

}
callHi(function(name){
	console.log("Hi " + name );
}
	,"ashwini")



