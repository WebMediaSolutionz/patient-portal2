import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('Modal Component', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    });

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe(`constructor()`, () => {
    it('should be initialized', () => {
      expect(component).toBeDefined();
    });
  });

  describe(`saveItem()`, () => {
    it('should invoke EventEmitter.emit()', () => {
      let spy = spyOn(component['save'], 'emit');

      component.saveItem();

      expect(spy).toHaveBeenCalled();
    });
  });
});
