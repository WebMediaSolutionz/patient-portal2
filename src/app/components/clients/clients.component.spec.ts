import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from "rxjs";
import { NO_ERRORS_SCHEMA } from "@angular/core";

// Components
import { ClientsComponent } from './clients.component';

// Services
import { WebService } from "../../shared/services/web.service";

// Pipes
import { CapitalizePipe } from "../../shared/pipes/capitalize.pipe";

class WebServiceStub {
  getClients() {
    return Observable.empty();
  }
}

describe('Clients Component', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClientsComponent,
        CapitalizePipe  
      ],
      providers: [
        { provide: WebService, useClass: WebServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
  });

  describe('constructor()', () => {
    it('should be initialized', () => {
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit()', () => {
    it('should invoke WebService.getClients and get the clients', () => {
      let spy = spyOn(component['webService'], 'getClients').and.callFake(() => {
        return Observable.empty();
      });

      fixture.detectChanges();
      
      expect(spy).toHaveBeenCalled();
    });
  });
});
