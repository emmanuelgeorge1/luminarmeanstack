import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public dataservice:DataService, private dab:FormBuilder) { }
  depositForm= this.dab.group({ 
    acc:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]*')]]

});
withdrawForm= this.dab.group({ 
  acc:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
  pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amt:['',[Validators.required,Validators.pattern('[0-9]*')]]

});


  ngOnInit(): void {
  }
  deposit(){
    if(this.depositForm.valid){
  this.dataservice.deposit(this.depositForm.value.acc,this.depositForm.value.pass,this.depositForm.value.amt)
  alert("form is valid")
  }
  else{
    alert("form is invalid")
  }
}
withdraw(){
  if(this.withdrawForm.valid){
this.dataservice.withdraw(this.withdrawForm.value.acc,this.withdrawForm.value.pass,this.withdrawForm.value.amt)
}
else{
  alert("form is invalid")
}
}
}
