import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitableOrganizationComponent } from './charitable-organization.component';

describe('CharitableOrganizationComponent', () => {
  let component: CharitableOrganizationComponent;
  let fixture: ComponentFixture<CharitableOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharitableOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitableOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
