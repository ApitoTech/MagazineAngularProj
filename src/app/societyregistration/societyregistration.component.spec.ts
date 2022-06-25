import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyregistrationComponent } from './societyregistration.component';

describe('SocietyregistrationComponent', () => {
  let component: SocietyregistrationComponent;
  let fixture: ComponentFixture<SocietyregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
