import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pp-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss']
})
export class ModalComponent {

  @Output() protected save: EventEmitter<any>;

  public saveItem(): void {
    this.save.emit();
  }
}
