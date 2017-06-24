import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Observable } from "rxjs";

// Components
import { ClientModalComponent } from './client-modal.component';

// Services
import { WebService } from "../../services/web.service";

// Classes
import { Client } from '../../custom-types/classes/client';

class WebServiceStub {
  public saveClient(client: Client) {
    return Observable.empty();
  }
}

xdescribe('ClientModalComponent', () => {
  let component: ClientModalComponent;
  let fixture: ComponentFixture<ClientModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientModalComponent ],
      providers: [
        { provide: WebService, useClass: WebServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
