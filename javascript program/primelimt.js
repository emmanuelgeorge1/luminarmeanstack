var lower=10
var upper=30
var flag=0
for(let i=lower;i<=upper;i++ ){
for(j=2;j<i;j++){

    if(i%j==0){

    flag=flag+1;
    break;

    }
    else{
        flag=0;
    }

}
if(flag==0){
    console.log(i,"prime number");
}
}