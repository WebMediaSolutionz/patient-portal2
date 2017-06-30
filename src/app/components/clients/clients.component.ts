import { Component, OnInit } from '@angular/core';

// Services
import { WebService } from '../../shared/services/web.service';

@Component({
  moduleId: module.id,
  selector: 'ss2-practices-and-roles',
  templateUrl: 'clients.component.html',
  styleUrls: ['clients.component.scss']
})
export class ClientsComponent implements OnInit {

  private title: string = 'practices and roles';

  private clients: any[];

  constructor(private webService: WebService) {}

  public ngOnInit(): void {
    this.webService.getClients().subscribe((res: any) => {
      this.clients = res;
    });
  }

}
