import { Component, OnInit } from '@angular/core';

// Services
import { WebService } from '../../shared/services/web.service';

// Classes
import { User } from '../../shared/custom-types/classes/user';
import { Client } from '../../shared/custom-types/classes/client';

// declaring jquery variable
declare var $: any;

@Component({
  selector: 'pp-portal-admin',
  templateUrl: './portal-admin.component.html',
  styleUrls: ['./portal-admin.component.scss']
})
export class PortalAdminComponent implements OnInit {

  private title: string = 'practices and roles';

  private client: Client = new Client();

  private clients: Client[];

  constructor(private webService: WebService) {}

  public ngOnInit(): void {
    this.webService.getClients().subscribe((res: any) => {
      this.clients = res;
    });
  }

  public edit(client: Client): void {
    this.client = client;

    // jQuery document ready function
    $(() => {
      $('#myModal').modal();
    });
  }

  public saveClient(client: Client): void {
    this.webService.saveClient(client).subscribe(
      () => {
        console.info('save client:', client);
      },
      (error) => {
        console.error('error');
      });
  }

}
