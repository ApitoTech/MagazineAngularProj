import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminLogin : FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) {
    this.adminLogin= this.formBuilder.group({
      userId:['',Validators.required],
      password:['',Validators.required]
    });
  }
   

  ngOnInit(): void {
   
  }

  login(){
    
    if(this.adminLogin.get('userId').value == 'admin' && this.adminLogin.get('password').value == 'admin'){
      this.router.navigate(['/dashboard']);
    }
  }
}