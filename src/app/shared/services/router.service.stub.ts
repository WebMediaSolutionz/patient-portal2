import { Observable } from 'rxjs';

export class RouterStub {
  private events = Observable.empty();

  public navigate(route) {
    // stub navigate method
  }
}
