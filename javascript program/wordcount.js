var text="hello hai hello hello hai"
var words=text.split(" ")
obj={}
for (let word of words){
    if (word in obj){
        obj[word]+=1
    }
    else{
        obj[word]=1
    }
}
elem=[]
for (let key in obj){
    elem.push([obj[key],key])
}
elem.sort((o1,o2)=>o2-o1)
console.log(elem)