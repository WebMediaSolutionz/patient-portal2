import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { TemplatesComponent } from './templates.component';

describe('Templates Component', () => {
  let component: TemplatesComponent;
  let fixture: ComponentFixture<TemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesComponent ]
    });

    fixture = TestBed.createComponent(TemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(`constructor()`, () => {
    it('should be initialized', () => {
      expect(component).toBeDefined();
    });
  });
});
