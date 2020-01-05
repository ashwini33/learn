/*function function1(arg1, callback){
	var first_argument= 5;
	var second_argument= 6;
	callback(first_argument,second_argument);
}
function1(5,function(num1,num2){
	console.log("second argument is " + num1 + " " + `${num2}`);
});
*/

function myForEach(Arr, callback){
	for(var i=0; i<Arr.length;i++){
		callback(Arr[i]);
	}
}
myArr=[1,2,"ff3"];
myForEach(myArr,function(element){
	console.log(element);
}
			
);

