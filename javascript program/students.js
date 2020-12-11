var students=[
    [100,"ajay","cse",140],
    [101,"vijay","civil",145],
    [102,"aju","mech",150],
    [102,"manju","eee",150]
]
for(let std of students){
    console.log(std[1].toUpperCase())
}
var count=0
for(let std of students){
    if(std[2]=="eee")
    {
        count+=1
    }
}console.log(count)