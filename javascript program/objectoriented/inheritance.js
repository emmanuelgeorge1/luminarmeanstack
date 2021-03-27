class Parent{
    phone=()=>{
        console.log("i have infinix")
    }
}
class Child extends parent{

}
var ch=new Child()
ch.phone()
//single inheritance


class Parent{
    ml=()=>{
        console.log("inside Parent");
    }
}
class Child extends parent{
    m2=()=>{
        console.log("inside child");
    }
}
class SubChild extends Child{
    m3=()=>{
        console.log("inside subchild");
    }
}
var sb=new SubChild();
sb.m3()
sb.m2()
sb.m1()
var ch=new Child()
ch.m2()
