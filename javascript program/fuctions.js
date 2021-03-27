var arr=[10,11,8,9,5,2]

var sqr=arr.map(num=>num   **2)
console.log(sqr)


var cube=arr.map(num=>num**3)
console.log(cube)


var evens=arr.filter(num=>num%2==0)
console.log(evens)


var names=["sachin","sehwag","dravid","emman","shotemman"]
var name=names.map(mame=>mame.toUpperCase())
console.log(name)

var sname=names.filter(mame=>mame[0]=="s").map(mame=>mame.toUpperCase())
console.log(sname)

var arr=[10,11,8,9,12,13,14,7,5]
var res=arr.reduce((no1,no2)=>no1>no2?no1:no2)

console.log(res)
var total=arr.reduce((no1,no2)=>no1+no2)

console.log(total)
var sorted=arr.sort((no1,no2)=>no2-no1)

console.log(sorted)