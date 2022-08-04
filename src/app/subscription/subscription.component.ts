import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/commonservices';
import {Login} from 'src/app/login';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
    login : Login =new Login();
  //loginForm = new FormGroup({});
    mobile:boolean=true;
    OTP:boolean=false;
    //mobileNumber: number=0;
  constructor(private fb: FormBuilder, private router:Router,private commonService: CommonService,private dialogRef: MatDialog) { }

  

  get mobileNumber() {
    return this.loginForm.get('mobileNumber')
  }

  get otp() {
    return this.loginForm.get('otp')
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
      return true;
  }

  loginForm = this.fb.group({
    mobileNumber : ['', [Validators.required, Validators.maxLength(10),Validators.minLength(10),Validators.maxLength(10), Validators.pattern('^[0-9]*$') ]],
    otp : ['', [Validators.required, Validators.maxLength(10),Validators.minLength(4), Validators.maxLength(4),Validators.pattern('^[0-9]*$')]]
  });


  sendOtp(): void{
    if(this.loginForm.get('mobileNumber').value != null) {
      this.mobile = false;
      this.OTP = true;
      this.commonService.getValidMobileNo(this.loginForm.get('mobileNumber').value).subscribe(res=>{
        alert('response'+JSON.stringify(res));
      });
    }
    else {
      alert("enter a valid mobile number");
    }
    

  }


  ngOnInit(): void {

    this.loginForm = this.fb.group({
      // name: ['', Validators.required],
      // email: ['', Validators.required],
      // phone: ['',Validators.required]
      mobileNumber: [''],
      otp:['']
      
  });
  }

  onSubmit() :void {

    //alert('otp type')
    //this.login.inStock
    // if(this.loginForm.get('otp').value == 1234){

    //   this.router.navigate(['/posts']);
    // }

  //   let resp=this.service.addItem(this.item);
  // resp.subscribe((data)=>this.message=data
  // );
  this.login.mobile=this.loginForm.get('mobileNumber').value;
  this.login.otp=this.loginForm.get('otp').value

  this.commonService.getValidOtp(this.login).subscribe(res=>{
    alert('response'+JSON.stringify(res.message));
    if(res.message.includes("success")){
      this.router.navigate(['/posts']);
    }else{
      alert('Failed To Validate Provided OTP, Either Wrong OTP Entered Or OTP Expired');
    }
  });
  //this.router.navigate(['/posts']);
  }

  selectIndividual(){
    this.router.navigate(['/subscription']);
  }
  //selectSociety(){
    //this.router.navigate(['/societyregistration']);
  //}

  openDialog(){
    this.dialogRef.open(PopUpComponent);
  }
}
