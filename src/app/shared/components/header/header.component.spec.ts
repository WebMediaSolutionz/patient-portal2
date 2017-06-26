import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";

// Components
import { HeaderComponent } from './header.component';

// Services
import { AuthService } from "../../services/auth.service";

class AuthServiceStub {
  public logout() {}
}

describe('Header Component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(`constructor()`, () => {
    it('should be initialized', () => {
      expect(component).toBeDefined();
    });
  });
});
