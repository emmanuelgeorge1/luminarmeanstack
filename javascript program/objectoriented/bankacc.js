class Bank{
    static bankName=()=>{
        console.log("South indian Bank")
    }
    createAccount=(acno,name,minimum_balance)=>{
        this.acno=acno;
        this.name=name;
        this.minimum_balance=minimum_balance;

    }
    deposit=(amount)=>{
        this.minimum_balance +=amount;
        console.log("Your account "+this.acno+" Has been created with ammount "+amount+" avaliable balance= "+this.minimum_balance)
    }
    windrawal=(amount)=>{
        if (amount>this.minimum_balance){
            console.log("insuffient fund ")
        }
        else{
            this.minimum_balance -=amount;
            console.log("your account "+ this.acno +" has been debited with ammount "+ amount +" avaliable balance is "+ this.minimum_balance)
        }
    }
balEnq=()=>{

console.log("your available balance= "+ this.minimum_balance)
}
}
var obj =new Bank()
obj.createAccount(99,"emman",50000)
obj.deposit(10000)
obj.windrawal(5005)
Bank.bankName()