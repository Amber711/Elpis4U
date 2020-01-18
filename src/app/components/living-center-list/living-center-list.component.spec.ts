import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingCenterListComponent } from './living-center-list.component';

describe('LivingCenterListComponent', () => {
  let component: LivingCenterListComponent;
  let fixture: ComponentFixture<LivingCenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingCenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
