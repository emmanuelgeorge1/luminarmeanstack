class employee{
    constructor(id,name,desig,salary){
    this.id=id
    this.name=name
    this.desig=desig
    this.salary=salary
}
}


var obj=new employee(100,"ajay","develpoer",25000)
var obj1=new employee(101,"ram","develpoer",26000)
var obj2=new employee(102,"raj","qa",27000)
var obj3=new employee(103,"ramu","qa",23000)
var employee=[]
employee.push(obj)
employee.push(obj1)
employee.push(obj2)
employee.push(obj3)

//for (let emp of employee){
    //if(emp.desig=="developer")
    //{
    //    console.log(emp)
  //  }
//}
//enames=employee.map(emp=>emp.name.toUpperCase())
//console.log(enames)

//var deva=employee.filter(emp=>emp.desig=="developer").forEach(o=>console.log(o,name)) 
data=employee.map(emp=>emp.salary).reduce((num1,num2)=>num1>num2?num1:num2)
console.log(data)