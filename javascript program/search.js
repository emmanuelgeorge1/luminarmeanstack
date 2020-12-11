var arr=[10,12,14,2,7,8]
var ele=12;
flag=0
for(let num of arr)
{
    if(num==ele){
        flag=1
        break
    }
}
if(flag==0){
    console.log("not found")
    }
    else
    {
        console.log("found")
    }
