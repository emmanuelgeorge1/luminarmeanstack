var emp={
    eid:100,
    name:"jhon",
    design:"devloper",
    salary:25000
}

console.log("gender" in emp)
emp["gender"]="male"
emp.salary+=50000
for(let key in emp){
    console.log(key,",",emp[key])
}
console.log(emp["name"])
