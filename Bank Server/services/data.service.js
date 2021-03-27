let accountDetails = {

    1000: { acno: 1000, balance: 1000, username: "userone", password: "testuser" },
    1001: { acno: 1001, balance: 12000, username: "usertwo", password: "testuser1" },
    1002: { acno: 1002, balance: 13000, username: "usethree", password: "testuser2" },
}
let currentUser;

const register = (acno,username,password)=>{
    console.log("register called")
    if(acno in accountDetails){
      return {
          status:false,
          message: "account already exist, Please login" 

      }
    }
    accountDetails[acno]={
      acno,
      balance:0,
      username,
      password
    }
    console.log(accountDetails);
    return {
        status:true,
        message: "registration successful " 
    }
  }


   const login = (acno,password)=>{
        let dataset=accountDetails ;
         if (acno in dataset){
           var pswdd = dataset[acno].password
           if(pswdd==password){
             currentUser=dataset[acno].username
    
            return{
                status:true,
                message:"Login succesful"
            }
           }
         
        else{
        return {
            status:false,
            message:"Incorrect password"
        }
        }
         }
        
         else{
           return{ 
               status:false,
               message:"User does't exist"
         }
        }
        }
        module.exports ={
            register,
            login
           }