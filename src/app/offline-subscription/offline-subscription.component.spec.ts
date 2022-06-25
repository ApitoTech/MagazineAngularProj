import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineSubscriptionComponent } from './offline-subscription.component';

describe('OfflineSubscriptionComponent', () => {
  let component: OfflineSubscriptionComponent;
  let fixture: ComponentFixture<OfflineSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
