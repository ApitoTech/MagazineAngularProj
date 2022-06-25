import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styleUrls: ['./union.component.css']
})
export class UnionComponent implements OnInit {

  unionLogin : FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) {
    this.unionLogin= this.formBuilder.group({
      userId:['',Validators.required],
      password:['',Validators.required]
    });
  }
   

  ngOnInit(): void {
   
  }

  login(){
    
    if(this.unionLogin.get('userId').value == 'admin' && this.unionLogin.get('password').value == 'admin'){
      this.router.navigate(['/offlinesubscription']);
    }
  }

}
