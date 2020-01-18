import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingCenterComponent } from './living-center.component';

describe('LivingCenterComponent', () => {
  let component: LivingCenterComponent;
  let fixture: ComponentFixture<LivingCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
