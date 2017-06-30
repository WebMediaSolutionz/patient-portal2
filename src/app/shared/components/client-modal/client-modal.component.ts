import { Component, Input, EventEmitter, Output } from '@angular/core';

// Components
import { ModalComponent } from '../modal/modal.component';

// Services
import { WebService } from '../../services/web.service';

// Classes
import { Client } from '../../custom-types/classes/client';

@Component({
  moduleId: module.id,
  selector: 'pp-client-modal',
  templateUrl: 'client-modal.component.html',
  styleUrls: ['client-modal.component.scss']
})
export class ClientModalComponent extends ModalComponent {

  @Output() save: EventEmitter<any> = new EventEmitter;

  @Input() private client: Client;

  constructor(private webService: WebService) {
    super();
  }

  public saveItem(): void {
    this.save.emit(this.client);
  }
}
