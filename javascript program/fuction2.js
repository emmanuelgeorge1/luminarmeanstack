var arr=[2,4,6,7,9]
var data=arr.map(num=>num**2)
console.log(data)

var data=arr.filter(num=>num%2==0)
console.log(data)

var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum)

var res=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(res)