var arr=[1,2,3,4,6];
var ele=7;
for(i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]+arr[j]==ele)
        {
            console.log(arr[i],arr[j]);

            
        }
    }
}