//console.log("hello world");
/*
var firstName = "ashwini";
if (firstName = "John"){
	console.log("Hello John");
}else if (firstName ="ashwini"){
	console.log("Hello ashwini");
}else{
	console.log("Hello Unknown");
}


for (var i=0; i<10; i++){
	console.log(i);
}

var myArr=[1,2,3,true, "John", false,7];
for (var i=0; i<myArr.length; i++){
	console.log(`${i} element is ${myArr[i]}`);
}
*/
var myArr=[1,2,3,true, "John", false,7]
var i=0;
while(true){
	console.log(`${i} element is ${myArr[i]}`);
	i++;
	if (i==myArr.length){
		break
	}
}
