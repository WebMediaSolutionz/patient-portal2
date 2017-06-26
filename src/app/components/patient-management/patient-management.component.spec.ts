import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { PatientManagementComponent } from './patient-management.component';

describe('PatientManagement Component', () => {
  let component: PatientManagementComponent;
  let fixture: ComponentFixture<PatientManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientManagementComponent ]
    });

    fixture = TestBed.createComponent(PatientManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(`constructor()`, () => {
    it('should be initialized', () => {
      expect(component).toBeDefined();
    });
  });
});
