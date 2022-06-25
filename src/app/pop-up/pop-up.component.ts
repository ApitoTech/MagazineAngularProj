import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  radioData='';
  constructor(private router:Router,private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  next(e){
    //alert(this.radioData);
    //this.router.navigate(['/post']);
    if(this.radioData=="newRegister"){
     // this.router.navigate(['/subscription']);
     this.router.navigate(['/societyregistration']);
      this.dialogRef.closeAll();
    }else{
      //this.router.navigate(['/existingSubscriber']);
      this.router.navigate(['/personaldetails']);
      this.dialogRef.closeAll();
    }
  }
 
  closeDialog(){
    this.dialogRef.closeAll();
  }
}
