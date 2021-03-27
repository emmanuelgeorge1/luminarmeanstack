class Bank {

    static getAccountDetails () {

        var accountDetails = {

            userone: { acno: 1000, balance: 1000, username: "userone", password: "testuser" },

            usertwo: { acno: 1001, balance: 12000, username: "usertwo", password: "testuser1" },
            userthree: { acno: 1002, balance: 13000, username: "usethree", password: "testuser2" },
        }

        return accountDetails;
    }

    
    static authenticateUser(uname, pwd){
        let datset = Bank.getAccountDetails();
        if (uname in datset) {
            if (datset[uname].password === pwd) {
                return 0;
            }
            else {
                return 1;
                // 1 for invalid password
            }

        }
        else {
            return -1;
            //-1 invalid username
        }


    }


    static login() {
    
        let uname = document.querySelector("#uname").value; //userone
        let pwd = document.querySelector("#pwd").value;
        let data = Bank.getAccountDetails()
        if (uname in data) {
            if(pwd==data[uname]["password"]){
                window.location.href="userhome.html"

            }
            else{
                alert("invalid Password")
            }
            
        
        
        }

    }    

static deposit(){
    let uname = document.querySelector("#uname").value
    let pwd = document.querySelector("#pwd").value
    let amt = Number(document.querySelector("#amt").value)
    let user = Bank.authenticateUser(uname, pwd)
    let dataset = Bank.getAccountDetails();
    //alert("hai")
    if (user==0){
        dataset[uname]["balance"]+=amt
        alert("avaliable balance is "+ dataset[uname]["balance"])
    }
    else if(user==1){
        alert("invalid password")

    }
    else
    {
        alert("user does't exist")
    }

}
static withdrawal(){


    let uname = document.querySelector("#uname").value //userone
    let pwd = document.querySelector("#pwd").value
    let amt = Number(document.querySelector("#amt").value)
    let user = Bank.authenticateUser(uname, pwd)
    let dataset = Bank.getAccountDetails();
    //alert("haii")
    if (user==0) {
        if (amt>dataset[uname]["balance"] ) 
        {
            alert("insuffient amount")
        }
        else{
            dataset[uname]["balance"]-=amt
            alert(dataset[uname]["balance"])
        }
          
    }
}

}