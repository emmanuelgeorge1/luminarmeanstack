import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit { 
  acc=""
  uname=""
  pwd=""

  registrationForm= this.fb.group({ 
    acc:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  });
  
  constructor(private dataservices:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  Register(){

    if(this.registrationForm.valid){
      var result = this.dataservices. register(this.registrationForm.value.acc,this.registrationForm.value.uname,this.registrationForm.value.pwd)

      if(result){
      this.router.navigateByUrl("")
      }
      else{
        this.router.navigateByUrl("")
      }
    }
    else{
      alert("Form invalid ")
    }
    console.log(this.registrationForm.value)
    

  }

}
