import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { GeneralSettingsComponent } from './general-settings.component';

describe('GeneralSettings Component', () => {
  let component: GeneralSettingsComponent;
  let fixture: ComponentFixture<GeneralSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSettingsComponent ]
    });

    fixture = TestBed.createComponent(GeneralSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(`constructor()`, () => {
    it('should be initialized', () => {
      expect(component).toBeDefined();
    });
  });
});
