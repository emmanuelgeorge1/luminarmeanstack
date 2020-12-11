var students ={
    rol:100,
    name:"emman",
    course:"btech",
    total:150
}
console.log(students.name)
console.log(students["name"])

//cant contain duplicate keys

for(let key in students){
    console.log(key+",",students[key])
}
console.log("course" in students)
console.log("gender" in students)
students["gender"]="male"
console.log(students)
students["total"]+=50
console.log(students)
