import { Component, OnInit,HostListener } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { IndividualUser } from '../individualUser';
import { OrderService } from '../order.service';
declare var Razorpay: any;


@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.css']
})
export class StatusbarComponent implements OnInit {

  form: any = {}; 
  paymentId: string;
  error: string;
  title = 'angular13bestcode';
 
  individualDetails!: FormGroup;
  addressDetails!: FormGroup;
  makePaymentDetails!: FormGroup;
  orderSummaryDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  makePayment_step = false;
  orderSummary_step = false;
  step = 1;

  constructor(private formBuilder: FormBuilder,private orderService: OrderService) { }

  ngOnInit() {

        this.individualDetails = this.formBuilder.group({
            firstName: ['',Validators.required],
            lastName: ['',Validators.required],
            email:['',Validators.required],
            dob:['',Validators.required],
            occupation:[''],
            society:[''],
            designation:[''],
            qualification:[''],
            referedBy:[''],
            referedByName:['']
        });

        this.addressDetails = this.formBuilder.group({
            address: ['', Validators.required],
            pincode: ['',Validators.required],
            village: [''],
            taluk: ['',Validators.required],
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
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
    };

  get personal() { return this.individualDetails.controls; }
  
  get address() { return this.addressDetails.controls; }

  get makePayment() { return this.makePaymentDetails.controls; }

  get ordersummary() { return this.orderSummaryDetails.controls; }
  next(){

    if(this.step==1){
          this.personal_step = true;
          if (this.individualDetails.invalid) { return  }
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
   // alert("Image2 click");
   this.paymentId = ''; 
   this.error = ''; 
   this.orderService.createOrder(this.form).subscribe(
   data => {
       this.options.key = data.secretKey;
       this.options.order_id = data.razorpayOrderId;
       this.options.amount ="1250"; //paise
       this.options.prefill.name = this.form.name;
       this.options.prefill.email = this.form.email;
       this.options.prefill.contact = this.form.phone;
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
        this.options.amount ="300";//paise
        this.options.prefill.name = this.form.name;
        this.options.prefill.email = this.form.email;
        this.options.prefill.contact = this.form.phone;
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
onSubmit(){

  //alert(this.individualDetails.controls);
  //alert(Object.keys(this.individualDetails.controls));
  //alert(this.individualDetails.controls['firstName'].value);
  let individualUser = <IndividualUser>{};
  individualUser.firstName=this.individualDetails.controls['firstName'].value;
  individualUser.lastName=this.individualDetails.controls['lastName'].value;
  individualUser.email=this.individualDetails.controls['email'].value;
  individualUser.dob=this.individualDetails.controls['dob'].value;
  individualUser.occupation=this.individualDetails.controls['occupation'].value;
  individualUser.society=this.individualDetails.controls['society'].value;
  individualUser.designation=this.individualDetails.controls['designation'].value;
  individualUser.qualification=this.individualDetails.controls['qualification'].value;
  individualUser.referedBy=this.individualDetails.controls['referedBy'].value;
  individualUser.referedByName=this.individualDetails.controls['referedByName'].value;
  individualUser.address=this.addressDetails.controls['address'].value;
  individualUser.village=this.addressDetails.controls['village'].value;
  individualUser.pincode=this.addressDetails.controls['pincode'].value;
  individualUser.taluk=this.addressDetails.controls['taluk'].value;
  individualUser.district=this.addressDetails.controls['district'].value;
  individualUser.state=this.addressDetails.controls['state'].value;
  alert(JSON.stringify(individualUser));

}
}
