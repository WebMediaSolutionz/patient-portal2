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

  constructor(private webService: WebService) {
    super();
  }
  @Input() private client: Client;

  public saveItem(): void {
    // console.info('save client');
    this.save.emit(this.client);
    // this.webService.saveClient(this.client);
  }
}
