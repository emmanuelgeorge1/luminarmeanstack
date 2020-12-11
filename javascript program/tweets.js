var tweets=[
    "sachin,tweet1",
    "sachin,tweet2",
    "kohil,tweet1",
    "kohil,tweet2",
    "kohil,tweet3",
    "sewag,tweet1"
]
var obj={}
for(let tweet of tweets){
    let name=tweet.split(",")[0];
    if(name in obj){
        obj[name]+=1
    }
    else{
        obj[name]=1
    }
}
var srtd=[]
for(let k in obj){
    srtd.push([obj[k],k])
}
srtd.sort((one,two)=>two[0]-one[0])
console.log(srtd[0])