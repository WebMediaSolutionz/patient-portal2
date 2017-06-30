import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Components
import { PortalAdminComponent } from './portal-admin.component';

// Services
import { WebService } from '../../shared/services/web.service';

class WebServiceStub {
  public getClients() {
    return Observable.empty();
  }

  public saveClient(client: any) {
    return Observable.empty();
  }
}

describe('PortalAdmin Component', () => {
  let component: PortalAdminComponent;
  let fixture: ComponentFixture<PortalAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalAdminComponent ],
      providers: [
        { provide: WebService, useClass: WebServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(PortalAdminComponent);
    component = fixture.componentInstance;
  });

  describe(`contructor()`, () => {
    it('should be initialized', () => {
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });
  });

  describe(`ngOnInit()`, () => {
    it('should invoke WebService.getClients() to retrieve the clients', () => {
      let spy = spyOn(component['webService'], 'getClients').and.callFake(() => {
        return Observable.empty();
      });

      fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe(`saveClient()`, () => {
    it(`should invoke WebService.saveClient() to save a client's data`, () => {
      let spy = spyOn(component['webService'], 'saveClient').and.callFake(() => {
        return Observable.empty();
      });

      component.saveClient(null);

      expect(spy).toHaveBeenCalled();
    });
  });
});
