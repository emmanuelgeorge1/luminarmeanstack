var arr=[1,2,3,4,6]
var low=0
var upp = arr.length-1
var ele=7
while(low<upp)
{
    let total=arr[low]+arr[upp];
    if(total>ele){
        upp=upp-1
    }
    else if(total<ele){
        low=low+1
    }
    else if(total==ele)
    {
        console.log("pairs "+arr[low]+"," +arr[upp]);
        low=low+1;
    }

}