class Student{
    constructor(roll,name,course,total){
    this.roll=roll;
    this.name=name;
    this.course=course;
    this.total=total;
    }
    printStudent(){
        console.log("name="+this.name)
        console.log("roll="+this.roll)
        console.log("course="+this.course)
    }
}
var obj1=new Student(100,"akhil","mba",145)
var obj2=new Student(100,"mkhil","mtech",175)
var obj3=new Student(100,"khil","bba",149)
var obj4=new Student(100,"ahail","btech",195)
var obj5=new Student(100,"hila","mca",115)


Student.push (obj1)
