import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  accountDetails:any = {

    1000: { acno: 1000, balance: 1000, username: "userone", password: "testuser" },
    1001: { acno: 1001, balance: 12000, username: "usertwo", password: "testuser1" },
    1002: { acno: 1002, balance: 13000, username: "usethree", password: "testuser2" },
}
currentUser:any;
  constructor() { 
    this.getData()
  }
  saveData(){
    localStorage.setItem("accountDetails",JSON.stringify( this.accountDetails))
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  
  }
}

  getData(){
    if(localStorage.getItem("accountDetails")){
    this.accountDetails=JSON.parse(localStorage.getItem("accountDetails")||'')
    }
    if(localStorage.getItem("currentUser")){

    this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
    }
  }
  login(acc:any,pass:any){
    let dataset=this.accountDetails ;
     if (acc in dataset){
       var pswdd = dataset[acc].password
       if(pswdd==pass){
         this.currentUser=dataset[acc].username
         this.saveData();
        alert("Login successful");
        return true;
       }
     
    else{
    alert("Incorrect password");
    return false;
    }
     }
    
     else{
       alert("No user exist with this Account Number")
       return false;
     }
    }
  
  register(acno:any,username:any,password:any){
    if(acno in this.accountDetails){
      alert("User alredy exsit please log in")
      return false;
    }
    this.accountDetails[acno]={
      acno,
      balance:0,
      username,
      password
    }
    this.saveData()
    alert("Registeration is succesfull");
    console.log(this.accountDetails)
    return true;
  }
  deposit(acc:any,pass:any,amount:any){
    var amt=parseInt(amount)
      let dataset=this.accountDetails ;
       if (acc in dataset){
        var pswdd = dataset[acc].password
         if(pswdd==pass){
          dataset[acc].balance+=amt
          this.saveData()
          alert("Credited with amount:"+amount+" New Balance is:"+dataset[acc].balance);
        
         }
       
      else{
      alert("Incorrect password");
      
      }
       }
      
       else{
         alert("No user exist with this Account Number")
      
       }
      }
  

  withdraw(acc:any,pass:any,amount:any){
    var amt=parseInt(amount);
      let dataset=this.accountDetails ;
       if (acc in dataset){
        var pswdd = dataset[acc].password
         if(pswdd==pass){
           if(dataset[acc].balance>amount){
          dataset[acc].balance-=amt
          this.saveData()
          alert("Debited with amount:"+amount+" New Balance is:"+dataset[acc].balance);
        
         }
         else{
           alert("low balace")
         }
        }
      else{
      alert("Incorrect password");
      
      }
       }
      
       else{
         alert("No user exist with this Account Number")
      
       }
      }
  }

