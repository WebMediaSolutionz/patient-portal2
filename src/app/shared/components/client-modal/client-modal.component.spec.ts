import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

describe('ClientModal Component', () => {
  let component: ClientModalComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponentWrapper,
        ClientModalComponent
      ],
      providers: [
        { provide: WebService, useClass: WebServiceStub }
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  describe(`constructor()`, () => {
    it('should be initialized', () => {
      expect(component).toBeDefined();
    });
  });

  describe(`saveItem()()`, () => {
    it('should invoke EventEmitter.emit()', () => {
      let spy = spyOn(component['save'], 'emit');

      component.saveItem();

      expect(spy).toHaveBeenCalled();
    });
  });
});

@Component({
  selector: 'test-component-wrapper',
  template: '<pp-client-modal [client]="client" (save)="saveItem()"></pp-client-modal>'
})
class TestComponentWrapper {

  private client: Client;

  constructor() {
    this.client = new Client();
  }

  public save(client: Client) {}
}
