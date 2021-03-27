import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
temp="Your perfect Partner";
acc="";
pass="";

loginForm= this.dab.group({ 
    acc:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
  pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
});
  accountDetails: any;

  constructor(private router:Router,private dataservices:DataService, private dab:FormBuilder) { }

  ngOnInit(): void {
  }

  // getAccNo(event:any){
  //   this.acc=event.target.value;
  //   console.log(this.acc)
     
  // }
//  // getPass(event:any){
//     this.pass=event.target.value;
//     console.log(this.pass)
//   }
  Login(){
   // alert("page works")
   var result = this.dataservices. login(this.loginForm.value.acc,this.loginForm.value.pass)

    if(result){
         this.router.navigateByUrl("dashboard")
       }
      
       else{
        
       }
      }
    }     

        
  
  

