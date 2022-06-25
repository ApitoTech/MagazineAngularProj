import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/commonservices';
import {Login} from 'src/app/login';

@Component({
  selector: 'app-existing-subscriber',
  templateUrl: './existing-subscriber.component.html',
  styleUrls: ['./existing-subscriber.component.css']
})
export class ExistingSubscriberComponent implements OnInit {

  login : Login =new Login();
  //loginForm = new FormGroup({});
    mobile:boolean=true;
    OTP:boolean=false;
    isIndividual=true;
    isSociety=false;
    subscriberId:any;
    //mobileNumber: number=0;

  constructor(private fb: FormBuilder, private router:Router,private commonService: CommonService) { }

  

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
      this.router.navigate(['/personaldetails']);
    }else{
      alert('Failed To Validate Provided OTP, Either Wrong OTP Entered Or OTP Expired');
    }
  });

  }

  selectIndividual(){
    // this.router.navigate(['/subscription']);
    this.isIndividual=true;
    this.isSociety=false;
  }
  selectSociety(){
    // this.router.navigate(['/personaldetails']);
    this.isIndividual=false;
    this.isSociety=true;
  }
  validateSubscriberId(){
    this.router.navigate(['/personaldetails']);
  }
}
