import { Component, OnInit } from '@angular/core';

// Services
import { WebService } from '../../shared/services/web.service';

@Component({
  selector: 'pp-clinic-branding',
  templateUrl: './clinic-branding.component.html',
  styleUrls: ['./clinic-branding.component.scss']
})
export class ClinicBrandingComponent implements OnInit {

  private formTitle: string = 'CLINIC INFO';
  private formTitle2: string = 'LOGO';

  private clinicBranding: any = {};

  constructor(private webService: WebService) {}

  public ngOnInit(): void {
    this.webService.getOne('/client', '5e429dd5-6c38-4a32-a287-0a767b2a0ab8')
        .subscribe((res: any) => {
          this.clinicBranding = res;
        });
  }

  public addUpdate(): void {
    this.webService.addUpdate('/saveclient', this.clinicBranding).subscribe();
  }

}
