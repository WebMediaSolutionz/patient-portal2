import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from "rxjs";
import { NO_ERRORS_SCHEMA } from "@angular/core";

// Components
import { ClinicBrandingComponent } from './clinic-branding.component';

// Services
import { WebService } from '../../shared/services/web.service';

// Pipes
import { CapitalizePipe } from "../../shared/pipes/capitalize.pipe";

class WebServiceStub {
  public getOne(url: string, id: string) {
    return Observable.empty();
  }

  public addUpdate(url: string, clinicBranding: any) {
    return Observable.empty();
  }
}

describe('ClinicBranding Component', () => {
  let component: ClinicBrandingComponent;
  let fixture: ComponentFixture<ClinicBrandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClinicBrandingComponent,
        CapitalizePipe
      ],
      providers: [
        { provide: WebService, useClass: WebServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(ClinicBrandingComponent);
    component = fixture.componentInstance;
  });

  describe(`contructor()`, () => {
    it('should be initialized', () => {
      fixture.detectChanges();

      expect(component).toBeDefined();
    });
  });

  describe(`ngOnInit()`, () => {
    it('should invoke WebService.getOne() to retrieve a particular client', () => {
      let spy = spyOn(component['webService'], 'getOne').and.callFake(() => {
        return Observable.empty();
      });

      fixture.detectChanges();
      
      expect(spy).toHaveBeenCalled();
    });
  });

  describe(`addUpdate()`, () => {
    it(`should invoke WebService.addUpdate() to save a particular client's data`, () => {
      let spy = spyOn(component['webService'], 'addUpdate').and.callFake(() => {
        return Observable.empty();
      });

      component.addUpdate();
      
      expect(spy).toHaveBeenCalled();
    });
  });
});
