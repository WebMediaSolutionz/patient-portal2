import { Observable } from 'rxjs';

export class WebServiceStub {
  public getPasswordRules() {
    //   stub getPasswordRules method
  }

  public savePasswordRules(passwordRule: any) {
    //   stub savePasswordRules
  }

  public getConfig() {
    return Observable.empty();
  }

  public saveClient(client: any) {
    return Observable.empty();
  }

  public getClients() {
    return Observable.empty();
  }
}
