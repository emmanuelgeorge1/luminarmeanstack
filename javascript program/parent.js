class parent{
    phone(num1,num2)
    {
        console.log("have nokia phone"+num1)
    }
}

class child extends parent{
    phone(num1,num2){
        super.phone(num1,num2)
        console.log(num1)
    }
}

var obj =new child()
obj.phone(10,20)