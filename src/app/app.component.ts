import { Component, OnInit } from '@angular/core';

// Services
import { ConfigService } from './shared/services/config.service';
import { AuthService } from "./shared/services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  private configs: any;

  private loaded: boolean = false;

  constructor(private configService: ConfigService,
              private authService: AuthService) {}

  public ngOnInit(): void {
    this.configService.getConfig()
                      .subscribe(
                        (data) => {
                          this.configs = data;

                          localStorage.setItem('product', this.configs.product);
                          localStorage.setItem('account', this.configs.account);
                          localStorage.setItem('errorDuration', this.configs.errorDuration);
                        },
                        (err) => {
                          console.info(err);
                        },
                        () => {
                          this.loaded = true;
                        }
                      );
  }
}
