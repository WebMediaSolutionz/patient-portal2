import { Observable } from 'rxjs';

const configs = {
  product: 'PulseCloud',
  account: 'QB1486',
  errorDuration: 2000
};

export class ConfigServiceStub {
    public getConfig() {
        return Observable.of(configs);
    }
}
