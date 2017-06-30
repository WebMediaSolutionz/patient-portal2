import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs';

// Services
import { AuthService } from './auth.service';
import { ErrorDisplayService } from './error-display.service';

// Models
import { PasswordRule } from './password-rules.model';
import { User } from '../custom-types/classes/user';
import { Client } from '../custom-types/classes/client';

@Injectable()
export class WebService {

  private API_URL = 'http://localhost:63145/api';

  private configUrl = './assets/data/config.json';

  private dest: string;

  constructor(private http: Http,
              private errorDisplayService: ErrorDisplayService,
              private authService: AuthService) {}

  public getPasswordRules(): Observable<PasswordRule> {
    this.dest = this.API_URL + '/password-rules';

    return this.http.get(this.dest, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public savePasswordRules(passwordRules: PasswordRule): Observable<PasswordRule> {
    this._confirmationMsg();

    this.dest = this.API_URL + '/password-rules';

    return this.http.post(this.dest, passwordRules, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public getClients(): Observable<Client> {
    this.dest = this.API_URL + '/client';

    return this.http.get(this.dest, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public saveClient(client: Client): any {
    this._confirmationMsg(`Client Modifications been saved`);

    this.dest = this.API_URL + '/saveclient';

    return this.http.post(this.dest, client, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public getUser(): Observable<User> {
    this.dest = this.API_URL + '/users/me';

    return this.http.get(this.dest, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public saveUser(userData: User): Observable<User> {
    this._confirmationMsg();

    this.dest = this.API_URL + '/users/me';

    return this.http.post(this.dest, userData, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public getConfig(): Observable<any> {
    return this.http.get(this.configUrl)
                    .map((res) => res.json());
  }

  public addUpdate(urlAction: string, data: any): any {
    this._confirmationMsg();

    this.dest = this.API_URL + urlAction;

    return this.http.post(this.dest, data, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  public getOne(urlAction: string, idValue: string): any {
    this._confirmationMsg(`Trying to update ` + urlAction );
    this._confirmationMsg('url: ' + this.API_URL + urlAction + '/' + idValue);

    return this.http.get(this.API_URL + urlAction + '/' + idValue, this.authService.tokenHeader)
                    .map((res) => res.json());
  }

  private _confirmationMsg(msg: string = `modifications have been saved`) {
    this.errorDisplayService.display(msg);
  }

}
