function Student(name,branch,roll){
	this.name=name;
	this.branch=branch;
	this.roll=roll;
	this.get_info=function(){
		return this.name + " is of branch " + this.branch + " having roll " + this.roll;
	}

}
var student1= new Student("ashwini", "cse", 11);
var student2= new Student("Neelesh", "cse", 12);

console.log(student1.get_info());
console.log(student2.get_info());

