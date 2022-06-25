import { Component, OnInit,HostListener } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { OrderService } from '../order.service';
declare var Razorpay: any;
@Component({
  selector: 'app-societyregistration',
  templateUrl: './societyregistration.component.html',
  styleUrls: ['./societyregistration.component.css']
})
export class SocietyregistrationComponent implements OnInit {


  form: any = {}; 
  paymentId: string;
  error: string;
  title = 'angular13bestcode';
 
  societyDetails!: FormGroup;
  addressDetails!: FormGroup;
  makePaymentDetails!: FormGroup;
  orderSummaryDetails!: FormGroup;
  society_step = false;
  address_step = false;
  makePayment_step = false;
  orderSummary_step = false;
  step = 1;

  constructor(private formBuilder: FormBuilder,private orderService: OrderService) { }

  ngOnInit() {

        this.societyDetails = this.formBuilder.group({
            // name: ['', Validators.required],
            // email: ['', Validators.required],
            // phone: ['',Validators.required]
            societyName: ['',Validators.required],
            designation: ['',Validators.required],
            mobileNumber:[''],
            landlineNumber:[''],
            emailAddress:[''],
            reffereName:['']
        });

        this.addressDetails = this.formBuilder.group({
            // city: ['', Validators.required],
            address: ['', Validators.required],
            pincode: ['',Validators.required],
            village: [''],
            talluk: ['',Validators.required],
            district: ['',Validators.required],
            state:['',Validators.required]
        });

        this.makePaymentDetails = this.formBuilder.group({
            highest_qualification: ['', Validators.required],
            university: ['', Validators.required],
            total_marks: ['',Validators.required]
        });

        this.orderSummaryDetails= this.formBuilder.group({
          
        });
  }

  options = {
    "key": "",
   
    "amount": "", 
    "name": "KSCFL",
    "description": "Web Development",
    "image": "assets/images/logo.png",
    "order_id":"",
    "handler": function (response){
        var event = new CustomEvent("payment.success", 
            {
                detail: response,
                bubbles: true,
                cancelable: true
            }
        );    
        window.dispatchEvent(event);
    }
    ,
    "prefill": {'contact': '9743875023', 'email': 'pravin.s731@gmail.com'},
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
    };

  get society() { return this.societyDetails.controls; }
  
  get address() { return this.addressDetails.controls; }

  get makePayment() { return this.makePaymentDetails.controls; }

  get ordersummary() { return this.orderSummaryDetails.controls; }
  next(){

    if(this.step==1){
          this.society_step = true;
          if (this.societyDetails.invalid) { return  }
          this.step++
         
    }
   else if(this.step==2){
        this.address_step = true;
        if (this.addressDetails.invalid) { return }
            this.step++;
    }
    
    else if(this.step==3){
      this.makePayment_step = true;
      if (this.orderSummaryDetails.invalid) { return }
          this.step++;
  }
  

  }

  previous(){
    this.step--
   
    if(this.step==1){
      this.address_step = false;
    }
    if(this.step==2){
      this.makePayment_step = false;
    }
    
   
  }

  // submit(){
    
  //   if(this.step==3){
  //     this.education_step = true;
  //     if (this.makePaymentDetails.invalid) { return }
  //     alert("Well done!!")
  //   }
  // }

  // Image1Click(){
  //   alert("image1 click");
  // }

  Image2Click(){
    alert("Image2 click");
    this.paymentId = ''; 
    this.error = ''; 
    this.orderService.createOrder(this.form).subscribe(
    data => {
        this.options.key = data.secretKey;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = "1250"; //paise
        //this.options.prefill.name = this.form.name;
        this.options.prefill.email = "abc";
        this.options.prefill.contact = "839842234s";
        var rzp1 = new Razorpay(this.options);
        rzp1.open();
                   
        rzp1.on('payment.failed', function (response){    
            // Todo - store this information in the server
            console.log(response.error.code);    
            console.log(response.error.description);    
            console.log(response.error.source);    
            console.log(response.error.step);    
            console.log(response.error.reason);    
            console.log(response.error.metadata.order_id);    
            console.log(response.error.metadata.payment_id);
            this.error = response.error.reason;
        }
        );
    }
    ,
    err => {
        this.error = err.error.message;
    }
    );
  }

  Image1Click(): void {
    this.paymentId = ''; 
    this.error = ''; 
    this.orderService.createOrder(this.form).subscribe(
    data => {
        this.options.key = data.secretKey;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = "300"; //paise
        //this.options.prefill.name = this.form.name;
        this.options.prefill.email = "abc@gmail.com";
        this.options.prefill.contact ="8789685757";
        var rzp1 = new Razorpay(this.options);
        rzp1.open();
                   
        rzp1.on('payment.failed', function (response){    
            // Todo - store this information in the server
            console.log(response.error.code);    
            console.log(response.error.description);    
            console.log(response.error.source);    
            console.log(response.error.step);    
            console.log(response.error.reason);    
            console.log(response.error.metadata.order_id);    
            console.log(response.error.metadata.payment_id);
            this.error = response.error.reason;
        }
        );
    }
    ,
    err => {
        this.error = err.error.message;
    }
    );
}

@HostListener('window:payment.success', ['$event']) 
onPaymentSuccess(event): void {
    this.orderService.updateOrder(event.detail).subscribe(
    data => {
      alert('Payment successfull');
      this.paymentId = data.message;
      this.makePayment_step = true;
      if (this.orderSummaryDetails.invalid) { return }
      this.step++;
    }
    ,
    err => {
        this.error = err.error.message;
    }
    );
}
}
