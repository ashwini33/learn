var myArr=[1,2,3,4,true,6,false,"hello world"]
/*for (var i=0;i<myArr.length;i++){
	console.log(`${i} element of the array is ${myArr[i]}`);
}
*/
var i=0;
while(true){
	console.log(`${i} element is ${myArr[i]}`);
	i++;
	if (i == myArr.length){
		break;
	}
}

