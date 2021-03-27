var emp=[
    {id:100,name:"ram",desig:"developer",join:1989,resign:2005},
    {id:100,name:"raju",desig:"developer",join:1990,resign:2005},
    {id:100,name:"ravi",desig:"hr",join:1991,resign:1999},
    {id:100,name:"amit",desig:"market",join:1995,resign:2005},

    ]
     for(let emp1 of emp){
        
         if (emp1["desig"]=="developer")
         {
             console.log(emp1["name"])
         }
        
     }
     for(let emp1 of emp){
         if((emp1["join"]>1989)&(emp1["resign"]<2000)){
             console.log(emp1)
       }
    }
     for(let emp1 of emp){
         if(((emp1["resign"])-(emp1["join"]))>=10)
         {
             console.log(emp1["name"])
         }
     }