import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private BASE_URL: string = 'http://localhost:63145/auth';

  private NAME_KEY: string = 'name';

  private TOKEN_KEY: string = 'token';

  constructor(private http: Http,
              private router: Router) {}

  public get name(): string {
    return localStorage.getItem(this.NAME_KEY);
  }

  public get isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  public get tokenHeader(): RequestOptions {
    let header = new Headers({authorization: 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)});

    return new RequestOptions({headers: header});
  }

  public login(loginData: any): void {
    this.http.post(this.BASE_URL + '/login', loginData).subscribe((res) => {
      this._authenticate(res);
    });
  }

  public register(user): void {
    delete user.confirmPassword;

    this.http.post(this.BASE_URL + '/register', user).subscribe((res) => {
      this._authenticate(res);
    });
  }

  public logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.NAME_KEY);
    this.router.navigate(['/login']);
  }

  private _authenticate(res): void {
    let authResponse = res.json();

    if (!authResponse.token) {
      return;
    }

    localStorage.setItem(this.TOKEN_KEY, authResponse.token);
    localStorage.setItem(this.NAME_KEY, authResponse.firstname);
    this.router.navigate(['/']);
  }

}