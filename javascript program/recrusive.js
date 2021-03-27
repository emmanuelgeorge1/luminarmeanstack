var pattern="BACBAAC"
var obj={}

for (let char of pattern){
    if(char in obj){
    console.log("first recrusive charcter is "+char)
    break
}
else{
obj[char]=1
}
}

