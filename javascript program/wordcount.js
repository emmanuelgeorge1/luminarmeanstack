var text="this is this is java"
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
console.log(obj)