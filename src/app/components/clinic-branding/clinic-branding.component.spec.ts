import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicBrandingComponent } from './clinic-branding.component';

describe('ClinicBrandingComponent', () => {
  let component: ClinicBrandingComponent;
  let fixture: ComponentFixture<ClinicBrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicBrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
