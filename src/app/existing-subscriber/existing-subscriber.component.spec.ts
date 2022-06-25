import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingSubscriberComponent } from './existing-subscriber.component';

describe('ExistingSubscriberComponent', () => {
  let component: ExistingSubscriberComponent;
  let fixture: ComponentFixture<ExistingSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingSubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
