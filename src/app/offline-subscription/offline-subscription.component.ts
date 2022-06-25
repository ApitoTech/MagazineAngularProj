import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offline-subscription',
  templateUrl: './offline-subscription.component.html',
  styleUrls: ['./offline-subscription.component.css']
})
export class OfflineSubscriptionComponent implements OnInit {
  step = 1;
  constructor() { }

  ngOnInit(): void {
  }

  next(){
    this.step = 2;
  }

  submit(){
    this.step = 3;
  }
}
