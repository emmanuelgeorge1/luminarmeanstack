class Bank {

    static getAccountDetails = () => {

        var accountDetails = {

            userone: { acno: 1000, balance: 1000, username: "userone", password: "testuser" },

            usertwo: { acno: 1001, balance: 12000, username: "usertwo", password: "testuser1" },
            userthree: { acno: 1002, balance: 13000, username: "usethree", password: "testuser2" },
        }

        return accountDetails;
    }

    static authenticateUser = (uname, pwd) => {
        let datset = Bank.getAccountDetails();
        if (uname in datset) {
            if (datset[uname].password === pwd) {
                return 1;
            }
            else {
                return 0;
                // 0 for invalid password
            }

        }
        else {
            return -1;
            //-1 invalid username
        }


    }

    static login = () => {
        let uname = document.querySelector("#uname").value //userone
        let pwd = document.querySelector("#pwd").value

        let user=Bank.authenticateUser(uname,pwd)
        if(user==1){
            alert("sucessfull login")
            window.location.href = "userhome.html"
        }
        else if(user==0){
            alert("invalid password")
        }
        // let datset = Bank.getAccountDetails();
        // if (uname in datset) {
        //     if (datset[uname].password === pwd) {
        //         alert("sucessfull login")
        //         window.location.href = "userhome.html"
        //     }
        //     else {
        //         alert("inavlid password")
        //     }

        // }
        // else {
        //     let ulab = document.querySelector("#ulabel")
        //     ulab.textContent = "ivalid username";
        //     ulab.style.color = "red"
        //     alert("no user exist with this username")
        // }


    }
    static deposit = () => {
        let uname = document.querySelector("#uname").value //userone
        let pwd = document.querySelector("#pwd").value
        let amt = Number(document.querySelector("#amt").value)
        let datset = Bank.getAccountDetails();
        if (uname in datset) {
            if (datset[uname].password === pwd) {
                datset[uname].balance += amt
                alert("ur account has been credited with amount " + amt + " aval bal " + datset[uname].balance)
            }
            else {
                alert("inavlid password")
            }

        }
        else {
            alert("no user exist with this username")
        }


    }
    static withdrawal = () => {


        let uname = document.querySelector("#uname").value //userone
        let pwd = document.querySelector("#pwd").value
        let amt = Number(document.querySelector("#amt").value)
        let datset = Bank.getAccountDetails();
        if (uname in datset) {
            if (datset[uname].password === pwd) {
                if (datset[uname].balance >= amt) {
                    datset[uname].balance -= amt
                    alert("ur account hasbeen debited with amount" + amt + "aval bal" + datset[uname].balance)
                }
                else {
                    alert("insufficient balance")
                }
            }
            else {
                alert("inavlid password")
            }

        }
        else {
            alert("no user exist with this username")
        }

    }


}

